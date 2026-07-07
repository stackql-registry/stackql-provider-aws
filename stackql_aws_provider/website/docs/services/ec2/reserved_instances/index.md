--- 
title: reserved_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - reserved_instances
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

Creates, updates, deletes, gets or lists a <code>reserved_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reserved_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.reserved_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_reserved_instances"
    values={[
        { label: 'describe_reserved_instances', value: 'describe_reserved_instances' }
    ]}
>
<TabItem value="describe_reserved_instances">

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
    <td>The Availability Zone in which the Reserved Instance can be used.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="CurrencyCode" /></td>
    <td><code>string</code></td>
    <td>The currency of the Reserved Instance. It's specified using ISO 4217 standard currency codes. At this time, the only supported currency is USD.</td>
</tr>
<tr>
    <td><CopyableCode code="Duration" /></td>
    <td><code>integer</code></td>
    <td>The duration of the Reserved Instance, in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="End" /></td>
    <td><code>string</code></td>
    <td>The time when the Reserved Instance expires.</td>
</tr>
<tr>
    <td><CopyableCode code="FixedPrice" /></td>
    <td><code>number</code></td>
    <td>The purchase price of the Reserved Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of reservations purchased.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceTenancy" /></td>
    <td><code>string</code></td>
    <td>The tenancy of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>The instance type on which the Reserved Instance can be used.</td>
</tr>
<tr>
    <td><CopyableCode code="OfferingClass" /></td>
    <td><code>string</code></td>
    <td>The offering class of the Reserved Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="OfferingType" /></td>
    <td><code>string</code></td>
    <td>The Reserved Instance offering type.</td>
</tr>
<tr>
    <td><CopyableCode code="ProductDescription" /></td>
    <td><code>string</code></td>
    <td>The Reserved Instance product platform description.</td>
</tr>
<tr>
    <td><CopyableCode code="RecurringCharges" /></td>
    <td><code>string</code></td>
    <td>The recurring charge tag assigned to the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservedInstancesId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Reserved Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="Scope" /></td>
    <td><code>string</code></td>
    <td>The scope of the Reserved Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="Start" /></td>
    <td><code>string</code></td>
    <td>The date and time the Reserved Instance started.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the Reserved Instance purchase.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="UsagePrice" /></td>
    <td><code>number</code></td>
    <td>The usage price of the Reserved Instance, per hour.</td>
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
    <td><a href="#describe_reserved_instances"><CopyableCode code="describe_reserved_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-OfferingClass"><code>OfferingClass</code></a>, <a href="#parameter-ReservedInstancesId"><code>ReservedInstancesId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-OfferingType"><code>OfferingType</code></a></td>
    <td>Describes one or more of the Reserved Instances that you purchased. For more information about Reserved Instances, see Reserved Instances in the Amazon EC2 User Guide. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.</td>
</tr>
<tr>
    <td><a href="#modify_reserved_instances"><CopyableCode code="modify_reserved_instances" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ReservedInstancesId"><code>ReservedInstancesId</code></a>, <a href="#parameter-ReservedInstancesConfigurationSetItemType"><code>ReservedInstancesConfigurationSetItemType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Modifies the configuration of your Reserved Instances, such as the Availability Zone, instance count, or instance type. The Reserved Instances to be modified must be identical, except for Availability Zone, network platform, and instance type. For more information, see Modify Reserved Instances in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_queued_reserved_instances"><CopyableCode code="delete_queued_reserved_instances" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ReservedInstancesId"><code>ReservedInstancesId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the queued purchases for the specified Reserved Instances.</td>
</tr>
<tr>
    <td><a href="#accept_reserved_instances_exchange_quote"><CopyableCode code="accept_reserved_instances_exchange_quote" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ReservedInstanceId"><code>ReservedInstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TargetConfiguration"><code>TargetConfiguration</code></a></td>
    <td>Accepts the Convertible Reserved Instance exchange quote described in the GetReservedInstancesExchangeQuote call.</td>
</tr>
<tr>
    <td><a href="#cancel_reserved_instances_listing"><CopyableCode code="cancel_reserved_instances_listing" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ReservedInstancesListingId"><code>ReservedInstancesListingId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels the specified Reserved Instance listing in the Reserved Instance Marketplace. For more information, see Sell in the Reserved Instance Marketplace in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-ReservedInstanceId">
    <td><CopyableCode code="ReservedInstanceId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Convertible Reserved Instances to exchange for another Convertible Reserved Instance of the same or higher value.</td>
</tr>
<tr id="parameter-ReservedInstancesConfigurationSetItemType">
    <td><CopyableCode code="ReservedInstancesConfigurationSetItemType" /></td>
    <td><code>array</code></td>
    <td>The configuration settings for the Reserved Instances to modify.</td>
</tr>
<tr id="parameter-ReservedInstancesId">
    <td><CopyableCode code="ReservedInstancesId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Reserved Instances.</td>
</tr>
<tr id="parameter-ReservedInstancesListingId">
    <td><CopyableCode code="ReservedInstancesListingId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Reserved Instance listing.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive token you provide to ensure idempotency of your modification request. For more information, see Ensuring Idempotency.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. availability-zone - The Availability Zone where the Reserved Instance can be used. availability-zone-id - The ID of the Availability Zone where the Reserved Instance can be used. duration - The duration of the Reserved Instance (one year or three years), in seconds (31536000 | 94608000). end - The time when the Reserved Instance expires (for example, 2015-08-07T11:54:42.000Z). fixed-price - The purchase price of the Reserved Instance (for example, 9800.0). instance-type - The instance type that is covered by the reservation. scope - The scope of the Reserved Instance (Region or Availability Zone). product-description - The Reserved Instance product platform description (Linux/UNIX | Linux with SQL Server Standard | Linux with SQL Server Web | Linux with SQL Server Enterprise | SUSE Linux | Red Hat Enterprise Linux | Red Hat Enterprise Linux with HA | Windows | Windows with SQL Server Standard | Windows with SQL Server Web | Windows with SQL Server Enterprise). reserved-instances-id - The ID of the Reserved Instance. start - The time at which the Reserved Instance purchase request was placed (for example, 2014-08-07T11:54:42.000Z). state - The state of the Reserved Instance (payment-pending | active | payment-failed | retired). tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. usage-price - The usage price of the Reserved Instance, per hour (for example, 0.84).</td>
</tr>
<tr id="parameter-OfferingClass">
    <td><CopyableCode code="OfferingClass" /></td>
    <td><code>string</code></td>
    <td>Describes whether the Reserved Instance is Standard or Convertible.</td>
</tr>
<tr id="parameter-OfferingType">
    <td><CopyableCode code="OfferingType" /></td>
    <td><code>string</code></td>
    <td>The Reserved Instance offering type. If you are using tools that predate the 2011-11-01 API version, you only have access to the Medium Utilization Reserved Instance offering type.</td>
</tr>
<tr id="parameter-ReservedInstancesId">
    <td><CopyableCode code="ReservedInstancesId" /></td>
    <td><code>array</code></td>
    <td>One or more Reserved Instance IDs. Default: Describes all your Reserved Instances, or only those otherwise specified.</td>
</tr>
<tr id="parameter-TargetConfiguration">
    <td><CopyableCode code="TargetConfiguration" /></td>
    <td><code>array</code></td>
    <td>The configuration of the target Convertible Reserved Instance to exchange for your current Convertible Reserved Instances.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_reserved_instances"
    values={[
        { label: 'describe_reserved_instances', value: 'describe_reserved_instances' }
    ]}
>
<TabItem value="describe_reserved_instances">

Describes one or more of the Reserved Instances that you purchased. For more information about Reserved Instances, see Reserved Instances in the Amazon EC2 User Guide. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.

```sql
SELECT
AvailabilityZone,
AvailabilityZoneId,
CurrencyCode,
Duration,
End,
FixedPrice,
InstanceCount,
InstanceTenancy,
InstanceType,
OfferingClass,
OfferingType,
ProductDescription,
RecurringCharges,
ReservedInstancesId,
Scope,
Start,
State,
Tags,
UsagePrice
FROM aws.ec2.reserved_instances
WHERE region = '{{ region }}' -- required
AND OfferingClass = '{{ OfferingClass }}'
AND ReservedInstancesId = '{{ ReservedInstancesId }}'
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND OfferingType = '{{ OfferingType }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_reserved_instances"
    values={[
        { label: 'modify_reserved_instances', value: 'modify_reserved_instances' }
    ]}
>
<TabItem value="modify_reserved_instances">

Modifies the configuration of your Reserved Instances, such as the Availability Zone, instance count, or instance type. The Reserved Instances to be modified must be identical, except for Availability Zone, network platform, and instance type. For more information, see Modify Reserved Instances in the Amazon EC2 User Guide.

```sql
UPDATE aws.ec2.reserved_instances
SET 
-- No updatable properties
WHERE 
ReservedInstancesId = '{{ ReservedInstancesId }}' --required
AND ReservedInstancesConfigurationSetItemType = '{{ ReservedInstancesConfigurationSetItemType }}' --required
AND region = '{{ region }}' --required
AND ClientToken = '{{ ClientToken}}'
RETURNING
ReservedInstancesModificationId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_queued_reserved_instances"
    values={[
        { label: 'delete_queued_reserved_instances', value: 'delete_queued_reserved_instances' }
    ]}
>
<TabItem value="delete_queued_reserved_instances">

Deletes the queued purchases for the specified Reserved Instances.

```sql
DELETE FROM aws.ec2.reserved_instances
WHERE ReservedInstancesId = '{{ ReservedInstancesId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_reserved_instances_exchange_quote"
    values={[
        { label: 'accept_reserved_instances_exchange_quote', value: 'accept_reserved_instances_exchange_quote' },
        { label: 'cancel_reserved_instances_listing', value: 'cancel_reserved_instances_listing' }
    ]}
>
<TabItem value="accept_reserved_instances_exchange_quote">

Accepts the Convertible Reserved Instance exchange quote described in the GetReservedInstancesExchangeQuote call.

```sql
EXEC aws.ec2.reserved_instances.accept_reserved_instances_exchange_quote 
@ReservedInstanceId='{{ ReservedInstanceId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}, 
@TargetConfiguration='{{ TargetConfiguration }}'
;
```
</TabItem>
<TabItem value="cancel_reserved_instances_listing">

Cancels the specified Reserved Instance listing in the Reserved Instance Marketplace. For more information, see Sell in the Reserved Instance Marketplace in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2.reserved_instances.cancel_reserved_instances_listing 
@ReservedInstancesListingId='{{ ReservedInstancesListingId }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
