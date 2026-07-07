--- 
title: capacity_reservations
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_reservations
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

Creates, updates, deletes, gets or lists a <code>capacity_reservations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capacity_reservations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.capacity_reservations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_capacity_reservations"
    values={[
        { label: 'describe_capacity_reservations', value: 'describe_capacity_reservations' }
    ]}
>
<TabItem value="describe_capacity_reservations">

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
    <td>The Availability Zone in which the capacity is reserved.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone in which the capacity is reserved.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailableInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The remaining capacity. Indicates the number of instances that can be launched in the Capacity Reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="CapacityAllocations" /></td>
    <td><code>string</code></td>
    <td>Information about instance capacity usage.</td>
</tr>
<tr>
    <td><CopyableCode code="CapacityBlockId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Block.</td>
</tr>
<tr>
    <td><CopyableCode code="CapacityReservationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Capacity Reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="CapacityReservationFleetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Reservation Fleet to which the Capacity Reservation belongs. Only valid for Capacity Reservations that were created by a Capacity Reservation Fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="CapacityReservationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="CommitmentInfo" /></td>
    <td><code>string</code></td>
    <td>Information about your commitment for a future-dated Capacity Reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string</code></td>
    <td>The date and time the Capacity Reservation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DeliveryPreference" /></td>
    <td><code>string</code></td>
    <td>The delivery method for a future-dated Capacity Reservation. incremental indicates that the requested capacity is delivered in addition to any running instances and reserved capacity that you have in your account at the requested date and time.</td>
</tr>
<tr>
    <td><CopyableCode code="EbsOptimized" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the Capacity Reservation supports EBS-optimized instances. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS- optimized instance.</td>
</tr>
<tr>
    <td><CopyableCode code="EndDate" /></td>
    <td><code>string</code></td>
    <td>The date and time the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is released and you can no longer launch instances into it. The Capacity Reservation's state changes to expired when it reaches its end date and time.</td>
</tr>
<tr>
    <td><CopyableCode code="EndDateType" /></td>
    <td><code>string</code></td>
    <td>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end types: unlimited - The Capacity Reservation remains active until you explicitly cancel it. limited - The Capacity Reservation expires automatically at a specified date and time.</td>
</tr>
<tr>
    <td><CopyableCode code="EphemeralStorage" /></td>
    <td><code>boolean</code></td>
    <td>Deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceMatchCriteria" /></td>
    <td><code>string</code></td>
    <td>Indicates the type of instance launches that the Capacity Reservation accepts. The options include: open - The Capacity Reservation accepts all instances that have matching attributes (instance type, platform, and Availability Zone). Instances that have matching attributes launch into the Capacity Reservation automatically without specifying any additional parameters. targeted - The Capacity Reservation only accepts instances that have matching attributes (instance type, platform, and Availability Zone), and explicitly target the Capacity Reservation. This ensures that only permitted instances can use the reserved capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="InstancePlatform" /></td>
    <td><code>string</code></td>
    <td>The type of operating system for which the Capacity Reservation reserves capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>The type of instance for which the Capacity Reservation reserves capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="Interruptible" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this Capacity Reservation is interruptible, meaning instances may be terminated when the owner reclaims capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="InterruptibleCapacityAllocation" /></td>
    <td><code>string</code></td>
    <td>Contains allocation details for interruptible reservations, including current allocated instances and target instance counts within the interruptibleCapacityAllocation object.</td>
</tr>
<tr>
    <td><CopyableCode code="InterruptionInfo" /></td>
    <td><code>string</code></td>
    <td>Information about the interruption configuration and association with the source reservation for interruptible Capacity Reservations.</td>
</tr>
<tr>
    <td><CopyableCode code="OutpostArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Outpost on which the Capacity Reservation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the Capacity Reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="PlacementGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the cluster placement group in which the Capacity Reservation was created. For more information, see Capacity Reservations for cluster placement groups in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservationType" /></td>
    <td><code>string</code></td>
    <td>The type of Capacity Reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="StartDate" /></td>
    <td><code>string</code></td>
    <td>The date and time the Capacity Reservation was started.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states: active - The capacity is available for use. expired - The Capacity Reservation expired automatically at the date and time specified in your reservation request. The reserved capacity is no longer available for your use. cancelled - The Capacity Reservation was canceled. The reserved capacity is no longer available for your use. pending - The Capacity Reservation request was successful but the capacity provisioning is still pending. failed - The Capacity Reservation request has failed. A request can fail due to request parameters that are not valid, capacity constraints, or instance limit constraints. You can view a failed request for 60 minutes. scheduled - (Future-dated Capacity Reservations) The future-dated Capacity Reservation request was approved and the Capacity Reservation is scheduled for delivery on the requested start date. payment-pending - (Capacity Blocks) The upfront payment has not been processed yet. payment-failed - (Capacity Blocks) The upfront payment was not processed in the 12-hour time frame. Your Capacity Block was released. assessing - (Future-dated Capacity Reservations) Amazon EC2 is assessing your request for a future-dated Capacity Reservation. delayed - (Future-dated Capacity Reservations) Amazon EC2 encountered a delay in provisioning the requested future-dated Capacity Reservation. Amazon EC2 is unable to deliver the requested capacity by the requested start date and time. unsupported - (Future-dated Capacity Reservations) Amazon EC2 can't support the future-dated Capacity Reservation request due to capacity constraints. You can view unsupported requests for 30 days. The Capacity Reservation will not be delivered.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the Capacity Reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="Tenancy" /></td>
    <td><code>string</code></td>
    <td>Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the following tenancy settings: default - The Capacity Reservation is created on hardware that is shared with other Amazon Web Services accounts. dedicated - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="TotalInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of instances for which the Capacity Reservation reserves capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="UnusedReservationBillingOwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account to which billing of the unused capacity of the Capacity Reservation is assigned.</td>
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
    <td><a href="#describe_capacity_reservations"><CopyableCode code="describe_capacity_reservations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CapacityReservationId"><code>CapacityReservationId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more of your Capacity Reservations. The results describe only the Capacity Reservations in the Amazon Web Services Region that you're currently using.</td>
</tr>
<tr>
    <td><a href="#create_capacity_reservation"><CopyableCode code="create_capacity_reservation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-InstanceType"><code>InstanceType</code></a>, <a href="#parameter-InstancePlatform"><code>InstancePlatform</code></a>, <a href="#parameter-InstanceCount"><code>InstanceCount</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a>, <a href="#parameter-AvailabilityZoneId"><code>AvailabilityZoneId</code></a>, <a href="#parameter-Tenancy"><code>Tenancy</code></a>, <a href="#parameter-EbsOptimized"><code>EbsOptimized</code></a>, <a href="#parameter-EphemeralStorage"><code>EphemeralStorage</code></a>, <a href="#parameter-EndDate"><code>EndDate</code></a>, <a href="#parameter-EndDateType"><code>EndDateType</code></a>, <a href="#parameter-InstanceMatchCriteria"><code>InstanceMatchCriteria</code></a>, <a href="#parameter-TagSpecifications"><code>TagSpecifications</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-OutpostArn"><code>OutpostArn</code></a>, <a href="#parameter-PlacementGroupArn"><code>PlacementGroupArn</code></a>, <a href="#parameter-StartDate"><code>StartDate</code></a>, <a href="#parameter-CommitmentDuration"><code>CommitmentDuration</code></a>, <a href="#parameter-DeliveryPreference"><code>DeliveryPreference</code></a></td>
    <td>Creates a new Capacity Reservation with the specified attributes. Capacity Reservations enable you to reserve capacity for your Amazon EC2 instances in a specific Availability Zone for any duration. You can create a Capacity Reservation at any time, and you can choose when it starts. You can create a Capacity Reservation for immediate use or you can request a Capacity Reservation for a future date. For more information, see Reserve compute capacity with On-Demand Capacity Reservations in the Amazon EC2 User Guide. Your request to create a Capacity Reservation could fail if: Amazon EC2 does not have sufficient capacity. In this case, try again at a later time, try in a different Availability Zone, or request a smaller Capacity Reservation. If your workload is flexible across instance types and sizes, try with different instance attributes. The requested quantity exceeds your On-Demand Instance quota. In this case, increase your On-Demand Instance quota for the requested instance type and try again. For more information, see Amazon EC2 Service Quotas in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#create_capacity_reservation_by_splitting"><CopyableCode code="create_capacity_reservation_by_splitting" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-SourceCapacityReservationId"><code>SourceCapacityReservationId</code></a>, <a href="#parameter-InstanceCount"><code>InstanceCount</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Create a new Capacity Reservation by splitting the capacity of the source Capacity Reservation. The new Capacity Reservation will have the same attributes as the source Capacity Reservation except for tags. The source Capacity Reservation must be active and owned by your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_interruptible_capacity_reservation_allocation"><CopyableCode code="create_interruptible_capacity_reservation_allocation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-CapacityReservationId"><code>CapacityReservationId</code></a>, <a href="#parameter-InstanceCount"><code>InstanceCount</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Creates an interruptible Capacity Reservation by specifying the number of unused instances you want to allocate from your source reservation. This helps you make unused capacity available for other workloads within your account while maintaining control to reclaim it.</td>
</tr>
<tr>
    <td><a href="#associate_capacity_reservation_billing_owner"><CopyableCode code="associate_capacity_reservation_billing_owner" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-CapacityReservationId"><code>CapacityReservationId</code></a>, <a href="#parameter-UnusedReservationBillingOwnerId"><code>UnusedReservationBillingOwnerId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Initiates a request to assign billing of the unused capacity of a shared Capacity Reservation to a consumer account that is consolidated under the same Amazon Web Services organizations payer account. For more information, see Billing assignment for shared Amazon EC2 Capacity Reservations.</td>
</tr>
<tr>
    <td><a href="#update_interruptible_capacity_reservation_allocation"><CopyableCode code="update_interruptible_capacity_reservation_allocation" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-CapacityReservationId"><code>CapacityReservationId</code></a>, <a href="#parameter-TargetInstanceCount"><code>TargetInstanceCount</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies the number of instances allocated to an interruptible reservation, allowing you to add more capacity or reclaim capacity to your source Capacity Reservation.</td>
</tr>
<tr>
    <td><a href="#modify_capacity_reservation"><CopyableCode code="modify_capacity_reservation" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-CapacityReservationId"><code>CapacityReservationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-InstanceCount"><code>InstanceCount</code></a>, <a href="#parameter-EndDate"><code>EndDate</code></a>, <a href="#parameter-EndDateType"><code>EndDateType</code></a>, <a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-AdditionalInfo"><code>AdditionalInfo</code></a>, <a href="#parameter-InstanceMatchCriteria"><code>InstanceMatchCriteria</code></a></td>
    <td>Modifies a Capacity Reservation's capacity, instance eligibility, and the conditions under which it is to be released. You can't modify a Capacity Reservation's instance type, EBS optimization, platform, instance store settings, Availability Zone, or tenancy. If you need to modify any of these attributes, we recommend that you cancel the Capacity Reservation, and then create a new one with the required attributes. For more information, see Modify an active Capacity Reservation. The allowed modifications depend on the state of the Capacity Reservation: assessing or scheduled state - You can modify the tags only. pending state - You can't modify the Capacity Reservation in any way. active state but still within the commitment duration - You can't decrease the instance count or set an end date that is within the commitment duration. All other modifications are allowed. active state with no commitment duration or elapsed commitment duration - All modifications are allowed. expired, cancelled, unsupported, or failed state - You can't modify the Capacity Reservation in any way.</td>
</tr>
<tr>
    <td><a href="#accept_capacity_reservation_billing_ownership"><CopyableCode code="accept_capacity_reservation_billing_ownership" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-CapacityReservationId"><code>CapacityReservationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Accepts a request to assign billing of the available capacity of a shared Capacity Reservation to your account. For more information, see Billing assignment for shared Amazon EC2 Capacity Reservations.</td>
</tr>
<tr>
    <td><a href="#cancel_capacity_reservation"><CopyableCode code="cancel_capacity_reservation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-CapacityReservationId"><code>CapacityReservationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Cancels the specified Capacity Reservation, releases the reserved capacity, and changes the Capacity Reservation's state to cancelled. You can cancel a Capacity Reservation that is in the following states: assessing active and there is no commitment duration or the commitment duration has elapsed. You can't cancel a future-dated Capacity Reservation during the commitment duration. You can't modify or cancel a Capacity Block. For more information, see Capacity Blocks for ML. If a future-dated Capacity Reservation enters the delayed state, the commitment duration is waived, and you can cancel it as soon as it enters the active state. Instances running in the reserved capacity continue running until you stop them. Stopped instances that target the Capacity Reservation can no longer launch. Modify these instances to either target a different Capacity Reservation, launch On-Demand Instance capacity, or run in any open Capacity Reservation that has matching attributes and sufficient capacity.</td>
</tr>
<tr>
    <td><a href="#disassociate_capacity_reservation_billing_owner"><CopyableCode code="disassociate_capacity_reservation_billing_owner" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-CapacityReservationId"><code>CapacityReservationId</code></a>, <a href="#parameter-UnusedReservationBillingOwnerId"><code>UnusedReservationBillingOwnerId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Cancels a pending request to assign billing of the unused capacity of a Capacity Reservation to a consumer account, or revokes a request that has already been accepted. For more information, see Billing assignment for shared Amazon EC2 Capacity Reservations.</td>
</tr>
<tr>
    <td><a href="#reject_capacity_reservation_billing_ownership"><CopyableCode code="reject_capacity_reservation_billing_ownership" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-CapacityReservationId"><code>CapacityReservationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Rejects a request to assign billing of the available capacity of a shared Capacity Reservation to your account. For more information, see Billing assignment for shared Amazon EC2 Capacity Reservations.</td>
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
<tr id="parameter-CapacityReservationId">
    <td><CopyableCode code="CapacityReservationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Reservation for which to reject the request.</td>
</tr>
<tr id="parameter-InstanceCount">
    <td><CopyableCode code="InstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of instances to allocate from your source reservation. You can only allocate available instances (also called unused capacity).</td>
</tr>
<tr id="parameter-InstancePlatform">
    <td><CopyableCode code="InstancePlatform" /></td>
    <td><code>string</code></td>
    <td>The type of operating system for which to reserve capacity.</td>
</tr>
<tr id="parameter-InstanceType">
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>The instance type for which to reserve capacity. You can request future-dated Capacity Reservations for instance types in the C, M, R, I, T, and G instance families only. For more information, see Instance types in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-SourceCapacityReservationId">
    <td><CopyableCode code="SourceCapacityReservationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Reservation from which you want to split the capacity.</td>
</tr>
<tr id="parameter-TargetInstanceCount">
    <td><CopyableCode code="TargetInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The new number of instances to allocate. Enter a higher number to add more capacity to share, or a lower number to reclaim capacity to your source Capacity Reservation.</td>
</tr>
<tr id="parameter-UnusedReservationBillingOwnerId">
    <td><CopyableCode code="UnusedReservationBillingOwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the consumer account to which the request was sent.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Accept">
    <td><CopyableCode code="Accept" /></td>
    <td><code>boolean</code></td>
    <td>Reserved. Capacity Reservations you have created are accepted by default.</td>
</tr>
<tr id="parameter-AdditionalInfo">
    <td><CopyableCode code="AdditionalInfo" /></td>
    <td><code>string</code></td>
    <td>Reserved for future use.</td>
</tr>
<tr id="parameter-AvailabilityZone">
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone in which to create the Capacity Reservation.</td>
</tr>
<tr id="parameter-AvailabilityZoneId">
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone in which to create the Capacity Reservation.</td>
</tr>
<tr id="parameter-CapacityReservationId">
    <td><CopyableCode code="CapacityReservationId" /></td>
    <td><code>array</code></td>
    <td>The ID of the Capacity Reservation.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</td>
</tr>
<tr id="parameter-CommitmentDuration">
    <td><CopyableCode code="CommitmentDuration" /></td>
    <td><code>integer (int64)</code></td>
    <td>Required for future-dated Capacity Reservations only. To create a Capacity Reservation for immediate use, omit this parameter. Specify a commitment duration, in seconds, for the future-dated Capacity Reservation. The commitment duration is a minimum duration for which you commit to having the future-dated Capacity Reservation in the active state in your account after it has been delivered. For more information, see Commitment duration.</td>
</tr>
<tr id="parameter-DeliveryPreference">
    <td><CopyableCode code="DeliveryPreference" /></td>
    <td><code>string</code></td>
    <td>Required for future-dated Capacity Reservations only. To create a Capacity Reservation for immediate use, omit this parameter. Indicates that the requested capacity will be delivered in addition to any running instances or reserved capacity that you have in your account at the requested date and time. The only supported value is incremental.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-EbsOptimized">
    <td><CopyableCode code="EbsOptimized" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the Capacity Reservation supports EBS-optimized instances. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS- optimized instance.</td>
</tr>
<tr id="parameter-EndDate">
    <td><CopyableCode code="EndDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is released and you can no longer launch instances into it. The Capacity Reservation's state changes to expired when it reaches its end date and time. The Capacity Reservation is cancelled within an hour from the specified time. For example, if you specify 5/31/2019, 13:30:55, the Capacity Reservation is guaranteed to end between 13:30:55 and 14:30:55 on 5/31/2019. You must provide an EndDate value if EndDateType is limited. Omit EndDate if EndDateType is unlimited.</td>
</tr>
<tr id="parameter-EndDateType">
    <td><CopyableCode code="EndDateType" /></td>
    <td><code>string</code></td>
    <td>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end types: unlimited - The Capacity Reservation remains active until you explicitly cancel it. Do not provide an EndDate value if EndDateType is unlimited. limited - The Capacity Reservation expires automatically at a specified date and time. You must provide an EndDate value if EndDateType is limited.</td>
</tr>
<tr id="parameter-EphemeralStorage">
    <td><CopyableCode code="EphemeralStorage" /></td>
    <td><code>boolean</code></td>
    <td>Deprecated.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. instance-type - The type of instance for which the Capacity Reservation reserves capacity. owner-id - The ID of the Amazon Web Services account that owns the Capacity Reservation. instance-platform - The type of operating system for which the Capacity Reservation reserves capacity. availability-zone - The Availability Zone of the Capacity Reservation. tenancy - Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the following tenancy settings: default - The Capacity Reservation is created on hardware that is shared with other Amazon Web Services accounts. dedicated - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single Amazon Web Services account. outpost-arn - The Amazon Resource Name (ARN) of the Outpost on which the Capacity Reservation was created. state - The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states: active- The Capacity Reservation is active and the capacity is available for your use. expired - The Capacity Reservation expired automatically at the date and time specified in your request. The reserved capacity is no longer available for your use. cancelled - The Capacity Reservation was cancelled. The reserved capacity is no longer available for your use. pending - The Capacity Reservation request was successful but the capacity provisioning is still pending. failed - The Capacity Reservation request has failed. A request might fail due to invalid request parameters, capacity constraints, or instance limit constraints. Failed requests are retained for 60 minutes. start-date - The date and time at which the Capacity Reservation was started. end-date - The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is released and you can no longer launch instances into it. The Capacity Reservation's state changes to expired when it reaches its end date and time. end-date-type - Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end types: unlimited - The Capacity Reservation remains active until you explicitly cancel it. limited - The Capacity Reservation expires automatically at a specified date and time. instance-match-criteria - Indicates the type of instance launches that the Capacity Reservation accepts. The options include: open - The Capacity Reservation accepts all instances that have matching attributes (instance type, platform, and Availability Zone). Instances that have matching attributes launch into the Capacity Reservation automatically without specifying any additional parameters. targeted - The Capacity Reservation only accepts instances that have matching attributes (instance type, platform, and Availability Zone), and explicitly target the Capacity Reservation. This ensures that only permitted instances can use the reserved capacity. placement-group-arn - The ARN of the cluster placement group in which the Capacity Reservation was created.</td>
</tr>
<tr id="parameter-InstanceCount">
    <td><CopyableCode code="InstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of instances for which to reserve capacity. The number of instances can't be increased or decreased by more than 1000 in a single request.</td>
</tr>
<tr id="parameter-InstanceMatchCriteria">
    <td><CopyableCode code="InstanceMatchCriteria" /></td>
    <td><code>string</code></td>
    <td>The matching criteria (instance eligibility) that you want to use in the modified Capacity Reservation. If you change the instance eligibility of an existing Capacity Reservation from targeted to open, any running instances that match the attributes of the Capacity Reservation, have the CapacityReservationPreference set to open, and are not yet running in the Capacity Reservation, will automatically use the modified Capacity Reservation. To modify the instance eligibility, the Capacity Reservation must be completely idle (zero usage).</td>
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
<tr id="parameter-OutpostArn">
    <td><CopyableCode code="OutpostArn" /></td>
    <td><code>string</code></td>
    <td>Not supported for future-dated Capacity Reservations. The Amazon Resource Name (ARN) of the Outpost on which to create the Capacity Reservation.</td>
</tr>
<tr id="parameter-PlacementGroupArn">
    <td><CopyableCode code="PlacementGroupArn" /></td>
    <td><code>string</code></td>
    <td>Not supported for future-dated Capacity Reservations. The Amazon Resource Name (ARN) of the cluster placement group in which to create the Capacity Reservation. For more information, see Capacity Reservations for cluster placement groups in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-StartDate">
    <td><CopyableCode code="StartDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Required for future-dated Capacity Reservations only. To create a Capacity Reservation for immediate use, omit this parameter. The date and time at which the future-dated Capacity Reservation should become available for use, in the ISO8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ). You can request a future-dated Capacity Reservation between 5 and 120 days in advance.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the interruptible Capacity Reservation during creation.</td>
</tr>
<tr id="parameter-TagSpecifications">
    <td><CopyableCode code="TagSpecifications" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the Capacity Reservation during launch.</td>
</tr>
<tr id="parameter-Tenancy">
    <td><CopyableCode code="Tenancy" /></td>
    <td><code>string</code></td>
    <td>Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the following tenancy settings: default - The Capacity Reservation is created on hardware that is shared with other Amazon Web Services accounts. dedicated - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single Amazon Web Services account.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_capacity_reservations"
    values={[
        { label: 'describe_capacity_reservations', value: 'describe_capacity_reservations' }
    ]}
>
<TabItem value="describe_capacity_reservations">

Describes one or more of your Capacity Reservations. The results describe only the Capacity Reservations in the Amazon Web Services Region that you're currently using.

```sql
SELECT
AvailabilityZone,
AvailabilityZoneId,
AvailableInstanceCount,
CapacityAllocations,
CapacityBlockId,
CapacityReservationArn,
CapacityReservationFleetId,
CapacityReservationId,
CommitmentInfo,
CreateDate,
DeliveryPreference,
EbsOptimized,
EndDate,
EndDateType,
EphemeralStorage,
InstanceMatchCriteria,
InstancePlatform,
InstanceType,
Interruptible,
InterruptibleCapacityAllocation,
InterruptionInfo,
OutpostArn,
OwnerId,
PlacementGroupArn,
ReservationType,
StartDate,
State,
Tags,
Tenancy,
TotalInstanceCount,
UnusedReservationBillingOwnerId
FROM aws.ec2.capacity_reservations
WHERE region = '{{ region }}' -- required
AND CapacityReservationId = '{{ CapacityReservationId }}'
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
    defaultValue="create_capacity_reservation"
    values={[
        { label: 'create_capacity_reservation', value: 'create_capacity_reservation' },
        { label: 'create_capacity_reservation_by_splitting', value: 'create_capacity_reservation_by_splitting' },
        { label: 'create_interruptible_capacity_reservation_allocation', value: 'create_interruptible_capacity_reservation_allocation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_capacity_reservation">

Creates a new Capacity Reservation with the specified attributes. Capacity Reservations enable you to reserve capacity for your Amazon EC2 instances in a specific Availability Zone for any duration. You can create a Capacity Reservation at any time, and you can choose when it starts. You can create a Capacity Reservation for immediate use or you can request a Capacity Reservation for a future date. For more information, see Reserve compute capacity with On-Demand Capacity Reservations in the Amazon EC2 User Guide. Your request to create a Capacity Reservation could fail if: Amazon EC2 does not have sufficient capacity. In this case, try again at a later time, try in a different Availability Zone, or request a smaller Capacity Reservation. If your workload is flexible across instance types and sizes, try with different instance attributes. The requested quantity exceeds your On-Demand Instance quota. In this case, increase your On-Demand Instance quota for the requested instance type and try again. For more information, see Amazon EC2 Service Quotas in the Amazon EC2 User Guide.

```sql
INSERT INTO aws.ec2.capacity_reservations (
InstanceType,
InstancePlatform,
InstanceCount,
region,
ClientToken,
AvailabilityZone,
AvailabilityZoneId,
Tenancy,
EbsOptimized,
EphemeralStorage,
EndDate,
EndDateType,
InstanceMatchCriteria,
TagSpecifications,
DryRun,
OutpostArn,
PlacementGroupArn,
StartDate,
CommitmentDuration,
DeliveryPreference
)
SELECT 
'{{ InstanceType }}',
'{{ InstancePlatform }}',
'{{ InstanceCount }}',
'{{ region }}',
'{{ ClientToken }}',
'{{ AvailabilityZone }}',
'{{ AvailabilityZoneId }}',
'{{ Tenancy }}',
'{{ EbsOptimized }}',
'{{ EphemeralStorage }}',
'{{ EndDate }}',
'{{ EndDateType }}',
'{{ InstanceMatchCriteria }}',
'{{ TagSpecifications }}',
'{{ DryRun }}',
'{{ OutpostArn }}',
'{{ PlacementGroupArn }}',
'{{ StartDate }}',
'{{ CommitmentDuration }}',
'{{ DeliveryPreference }}'
RETURNING
AvailabilityZone,
AvailabilityZoneId,
AvailableInstanceCount,
CapacityAllocations,
CapacityBlockId,
CapacityReservationArn,
CapacityReservationFleetId,
CapacityReservationId,
CommitmentInfo,
CreateDate,
DeliveryPreference,
EbsOptimized,
EndDate,
EndDateType,
EphemeralStorage,
InstanceMatchCriteria,
InstancePlatform,
InstanceType,
Interruptible,
InterruptibleCapacityAllocation,
InterruptionInfo,
OutpostArn,
OwnerId,
PlacementGroupArn,
ReservationType,
StartDate,
State,
Tags,
Tenancy,
TotalInstanceCount,
UnusedReservationBillingOwnerId
;
```
</TabItem>
<TabItem value="create_capacity_reservation_by_splitting">

Create a new Capacity Reservation by splitting the capacity of the source Capacity Reservation. The new Capacity Reservation will have the same attributes as the source Capacity Reservation except for tags. The source Capacity Reservation must be active and owned by your Amazon Web Services account.

```sql
INSERT INTO aws.ec2.capacity_reservations (
SourceCapacityReservationId,
InstanceCount,
region,
DryRun,
ClientToken,
TagSpecification
)
SELECT 
'{{ SourceCapacityReservationId }}',
'{{ InstanceCount }}',
'{{ region }}',
'{{ DryRun }}',
'{{ ClientToken }}',
'{{ TagSpecification }}'
RETURNING
DestinationCapacityReservation,
InstanceCount,
SourceCapacityReservation
;
```
</TabItem>
<TabItem value="create_interruptible_capacity_reservation_allocation">

Creates an interruptible Capacity Reservation by specifying the number of unused instances you want to allocate from your source reservation. This helps you make unused capacity available for other workloads within your account while maintaining control to reclaim it.

```sql
INSERT INTO aws.ec2.capacity_reservations (
CapacityReservationId,
InstanceCount,
region,
ClientToken,
DryRun,
TagSpecification
)
SELECT 
'{{ CapacityReservationId }}',
'{{ InstanceCount }}',
'{{ region }}',
'{{ ClientToken }}',
'{{ DryRun }}',
'{{ TagSpecification }}'
RETURNING
InterruptionType,
SourceCapacityReservationId,
Status,
TargetInstanceCount
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: capacity_reservations
  props:
    - name: InstanceType
      value: "{{ InstanceType }}"
      description: Required parameter for the capacity_reservations resource.
    - name: InstancePlatform
      value: "{{ InstancePlatform }}"
      description: Required parameter for the capacity_reservations resource.
    - name: InstanceCount
      value: {{ InstanceCount }}
      description: Required parameter for the capacity_reservations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the capacity_reservations resource.
    - name: SourceCapacityReservationId
      value: "{{ SourceCapacityReservationId }}"
      description: Required parameter for the capacity_reservations resource.
    - name: CapacityReservationId
      value: "{{ CapacityReservationId }}"
      description: Required parameter for the capacity_reservations resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensure Idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensure Idempotency.
    - name: AvailabilityZone
      value: "{{ AvailabilityZone }}"
      description: The Availability Zone in which to create the Capacity Reservation.
      description: The Availability Zone in which to create the Capacity Reservation.
    - name: AvailabilityZoneId
      value: "{{ AvailabilityZoneId }}"
      description: The ID of the Availability Zone in which to create the Capacity Reservation.
      description: The ID of the Availability Zone in which to create the Capacity Reservation.
    - name: Tenancy
      value: "{{ Tenancy }}"
      description: Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the following tenancy settings: default - The Capacity Reservation is created on hardware that is shared with other Amazon Web Services accounts. dedicated - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single Amazon Web Services account.
      description: Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the following tenancy settings: default - The Capacity Reservation is created on hardware that is shared with other Amazon Web Services accounts. dedicated - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single Amazon Web Services account.
    - name: EbsOptimized
      value: {{ EbsOptimized }}
      description: Indicates whether the Capacity Reservation supports EBS-optimized instances. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS- optimized instance.
      description: Indicates whether the Capacity Reservation supports EBS-optimized instances. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS- optimized instance.
    - name: EphemeralStorage
      value: {{ EphemeralStorage }}
      description: Deprecated.
      description: Deprecated.
    - name: EndDate
      value: "{{ EndDate }}"
      description: The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is released and you can no longer launch instances into it. The Capacity Reservation's state changes to expired when it reaches its end date and time. You must provide an EndDate value if EndDateType is limited. Omit EndDate if EndDateType is unlimited. If the EndDateType is limited, the Capacity Reservation is cancelled within an hour from the specified time. For example, if you specify 5/31/2019, 13:30:55, the Capacity Reservation is guaranteed to end between 13:30:55 and 14:30:55 on 5/31/2019. If you are requesting a future-dated Capacity Reservation, you can't specify an end date and time that is within the commitment duration.
      description: The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is released and you can no longer launch instances into it. The Capacity Reservation's state changes to expired when it reaches its end date and time. You must provide an EndDate value if EndDateType is limited. Omit EndDate if EndDateType is unlimited. If the EndDateType is limited, the Capacity Reservation is cancelled within an hour from the specified time. For example, if you specify 5/31/2019, 13:30:55, the Capacity Reservation is guaranteed to end between 13:30:55 and 14:30:55 on 5/31/2019. If you are requesting a future-dated Capacity Reservation, you can't specify an end date and time that is within the commitment duration.
    - name: EndDateType
      value: "{{ EndDateType }}"
      description: Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end types: unlimited - The Capacity Reservation remains active until you explicitly cancel it. Do not provide an EndDate if the EndDateType is unlimited. limited - The Capacity Reservation expires automatically at a specified date and time. You must provide an EndDate value if the EndDateType value is limited.
      description: Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end types: unlimited - The Capacity Reservation remains active until you explicitly cancel it. Do not provide an EndDate if the EndDateType is unlimited. limited - The Capacity Reservation expires automatically at a specified date and time. You must provide an EndDate value if the EndDateType value is limited.
    - name: InstanceMatchCriteria
      value: "{{ InstanceMatchCriteria }}"
      description: Indicates the type of instance launches that the Capacity Reservation accepts. The options include: open - The Capacity Reservation automatically matches all instances that have matching attributes (instance type, platform, and Availability Zone). Instances that have matching attributes run in the Capacity Reservation automatically without specifying any additional parameters. targeted - The Capacity Reservation only accepts instances that have matching attributes (instance type, platform, and Availability Zone), and explicitly target the Capacity Reservation. This ensures that only permitted instances can use the reserved capacity. If you are requesting a future-dated Capacity Reservation, you must specify targeted. Default: open
      description: Indicates the type of instance launches that the Capacity Reservation accepts. The options include: open - The Capacity Reservation automatically matches all instances that have matching attributes (instance type, platform, and Availability Zone). Instances that have matching attributes run in the Capacity Reservation automatically without specifying any additional parameters. targeted - The Capacity Reservation only accepts instances that have matching attributes (instance type, platform, and Availability Zone), and explicitly target the Capacity Reservation. This ensures that only permitted instances can use the reserved capacity. If you are requesting a future-dated Capacity Reservation, you must specify targeted. Default: open
    - name: TagSpecifications
      value: "{{ TagSpecifications }}"
      description: The tags to apply to the Capacity Reservation during launch.
      description: The tags to apply to the Capacity Reservation during launch.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: OutpostArn
      value: "{{ OutpostArn }}"
      description: Not supported for future-dated Capacity Reservations. The Amazon Resource Name (ARN) of the Outpost on which to create the Capacity Reservation.
      description: Not supported for future-dated Capacity Reservations. The Amazon Resource Name (ARN) of the Outpost on which to create the Capacity Reservation.
    - name: PlacementGroupArn
      value: "{{ PlacementGroupArn }}"
      description: Not supported for future-dated Capacity Reservations. The Amazon Resource Name (ARN) of the cluster placement group in which to create the Capacity Reservation. For more information, see Capacity Reservations for cluster placement groups in the Amazon EC2 User Guide.
      description: Not supported for future-dated Capacity Reservations. The Amazon Resource Name (ARN) of the cluster placement group in which to create the Capacity Reservation. For more information, see Capacity Reservations for cluster placement groups in the Amazon EC2 User Guide.
    - name: StartDate
      value: "{{ StartDate }}"
      description: Required for future-dated Capacity Reservations only. To create a Capacity Reservation for immediate use, omit this parameter. The date and time at which the future-dated Capacity Reservation should become available for use, in the ISO8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ). You can request a future-dated Capacity Reservation between 5 and 120 days in advance.
      description: Required for future-dated Capacity Reservations only. To create a Capacity Reservation for immediate use, omit this parameter. The date and time at which the future-dated Capacity Reservation should become available for use, in the ISO8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ). You can request a future-dated Capacity Reservation between 5 and 120 days in advance.
    - name: CommitmentDuration
      value: "{{ CommitmentDuration }}"
      description: Required for future-dated Capacity Reservations only. To create a Capacity Reservation for immediate use, omit this parameter. Specify a commitment duration, in seconds, for the future-dated Capacity Reservation. The commitment duration is a minimum duration for which you commit to having the future-dated Capacity Reservation in the active state in your account after it has been delivered. For more information, see Commitment duration.
      description: Required for future-dated Capacity Reservations only. To create a Capacity Reservation for immediate use, omit this parameter. Specify a commitment duration, in seconds, for the future-dated Capacity Reservation. The commitment duration is a minimum duration for which you commit to having the future-dated Capacity Reservation in the active state in your account after it has been delivered. For more information, see Commitment duration.
    - name: DeliveryPreference
      value: "{{ DeliveryPreference }}"
      description: Required for future-dated Capacity Reservations only. To create a Capacity Reservation for immediate use, omit this parameter. Indicates that the requested capacity will be delivered in addition to any running instances or reserved capacity that you have in your account at the requested date and time. The only supported value is incremental.
      description: Required for future-dated Capacity Reservations only. To create a Capacity Reservation for immediate use, omit this parameter. Indicates that the requested capacity will be delivered in addition to any running instances or reserved capacity that you have in your account at the requested date and time. The only supported value is incremental.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the new Capacity Reservation.
      description: The tags to apply to the new Capacity Reservation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_capacity_reservation_billing_owner"
    values={[
        { label: 'associate_capacity_reservation_billing_owner', value: 'associate_capacity_reservation_billing_owner' },
        { label: 'update_interruptible_capacity_reservation_allocation', value: 'update_interruptible_capacity_reservation_allocation' },
        { label: 'modify_capacity_reservation', value: 'modify_capacity_reservation' }
    ]}
>
<TabItem value="associate_capacity_reservation_billing_owner">

Initiates a request to assign billing of the unused capacity of a shared Capacity Reservation to a consumer account that is consolidated under the same Amazon Web Services organizations payer account. For more information, see Billing assignment for shared Amazon EC2 Capacity Reservations.

```sql
UPDATE aws.ec2.capacity_reservations
SET 
-- No updatable properties
WHERE 
CapacityReservationId = '{{ CapacityReservationId }}' --required
AND UnusedReservationBillingOwnerId = '{{ UnusedReservationBillingOwnerId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
Return;
```
</TabItem>
<TabItem value="update_interruptible_capacity_reservation_allocation">

Modifies the number of instances allocated to an interruptible reservation, allowing you to add more capacity or reclaim capacity to your source Capacity Reservation.

```sql
UPDATE aws.ec2.capacity_reservations
SET 
-- No updatable properties
WHERE 
CapacityReservationId = '{{ CapacityReservationId }}' --required
AND TargetInstanceCount = '{{ TargetInstanceCount }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
InstanceCount,
InterruptibleCapacityReservationId,
InterruptionType,
SourceCapacityReservationId,
Status,
TargetInstanceCount;
```
</TabItem>
<TabItem value="modify_capacity_reservation">

Modifies a Capacity Reservation's capacity, instance eligibility, and the conditions under which it is to be released. You can't modify a Capacity Reservation's instance type, EBS optimization, platform, instance store settings, Availability Zone, or tenancy. If you need to modify any of these attributes, we recommend that you cancel the Capacity Reservation, and then create a new one with the required attributes. For more information, see Modify an active Capacity Reservation. The allowed modifications depend on the state of the Capacity Reservation: assessing or scheduled state - You can modify the tags only. pending state - You can't modify the Capacity Reservation in any way. active state but still within the commitment duration - You can't decrease the instance count or set an end date that is within the commitment duration. All other modifications are allowed. active state with no commitment duration or elapsed commitment duration - All modifications are allowed. expired, cancelled, unsupported, or failed state - You can't modify the Capacity Reservation in any way.

```sql
UPDATE aws.ec2.capacity_reservations
SET 
-- No updatable properties
WHERE 
CapacityReservationId = '{{ CapacityReservationId }}' --required
AND region = '{{ region }}' --required
AND InstanceCount = '{{ InstanceCount}}'
AND EndDate = '{{ EndDate}}'
AND EndDateType = '{{ EndDateType}}'
AND Accept = {{ Accept}}
AND DryRun = {{ DryRun}}
AND AdditionalInfo = '{{ AdditionalInfo}}'
AND InstanceMatchCriteria = '{{ InstanceMatchCriteria}}'
RETURNING
Return;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_capacity_reservation_billing_ownership"
    values={[
        { label: 'accept_capacity_reservation_billing_ownership', value: 'accept_capacity_reservation_billing_ownership' },
        { label: 'cancel_capacity_reservation', value: 'cancel_capacity_reservation' },
        { label: 'disassociate_capacity_reservation_billing_owner', value: 'disassociate_capacity_reservation_billing_owner' },
        { label: 'reject_capacity_reservation_billing_ownership', value: 'reject_capacity_reservation_billing_ownership' }
    ]}
>
<TabItem value="accept_capacity_reservation_billing_ownership">

Accepts a request to assign billing of the available capacity of a shared Capacity Reservation to your account. For more information, see Billing assignment for shared Amazon EC2 Capacity Reservations.

```sql
EXEC aws.ec2.capacity_reservations.accept_capacity_reservation_billing_ownership 
@CapacityReservationId='{{ CapacityReservationId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="cancel_capacity_reservation">

Cancels the specified Capacity Reservation, releases the reserved capacity, and changes the Capacity Reservation's state to cancelled. You can cancel a Capacity Reservation that is in the following states: assessing active and there is no commitment duration or the commitment duration has elapsed. You can't cancel a future-dated Capacity Reservation during the commitment duration. You can't modify or cancel a Capacity Block. For more information, see Capacity Blocks for ML. If a future-dated Capacity Reservation enters the delayed state, the commitment duration is waived, and you can cancel it as soon as it enters the active state. Instances running in the reserved capacity continue running until you stop them. Stopped instances that target the Capacity Reservation can no longer launch. Modify these instances to either target a different Capacity Reservation, launch On-Demand Instance capacity, or run in any open Capacity Reservation that has matching attributes and sufficient capacity.

```sql
EXEC aws.ec2.capacity_reservations.cancel_capacity_reservation 
@CapacityReservationId='{{ CapacityReservationId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="disassociate_capacity_reservation_billing_owner">

Cancels a pending request to assign billing of the unused capacity of a Capacity Reservation to a consumer account, or revokes a request that has already been accepted. For more information, see Billing assignment for shared Amazon EC2 Capacity Reservations.

```sql
EXEC aws.ec2.capacity_reservations.disassociate_capacity_reservation_billing_owner 
@CapacityReservationId='{{ CapacityReservationId }}' --required, 
@UnusedReservationBillingOwnerId='{{ UnusedReservationBillingOwnerId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="reject_capacity_reservation_billing_ownership">

Rejects a request to assign billing of the available capacity of a shared Capacity Reservation to your account. For more information, see Billing assignment for shared Amazon EC2 Capacity Reservations.

```sql
EXEC aws.ec2.capacity_reservations.reject_capacity_reservation_billing_ownership 
@CapacityReservationId='{{ CapacityReservationId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
