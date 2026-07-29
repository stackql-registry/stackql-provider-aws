--- 
title: reserved_instances_offerings
hide_title: false
hide_table_of_contents: false
keywords:
  - reserved_instances_offerings
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

Creates, updates, deletes, gets or lists a <code>reserved_instances_offerings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reserved_instances_offerings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.reserved_instances_offerings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_reserved_instances_offerings"
    values={[
        { label: 'describe_reserved_instances_offerings', value: 'describe_reserved_instances_offerings' }
    ]}
>
<TabItem value="describe_reserved_instances_offerings">

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
    <td>The Availability Zone in which the Reserved Instance can be used.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="currency_code" /></td>
    <td><code>string</code></td>
    <td>The currency of the Reserved Instance offering you are purchasing. It's specified using ISO 4217 standard currency codes. At this time, the only supported currency is USD.</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>The duration of the Reserved Instance, in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="fixed_price" /></td>
    <td><code>number</code></td>
    <td>The purchase price of the Reserved Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_tenancy" /></td>
    <td><code>string</code></td>
    <td>The tenancy of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The instance type on which the Reserved Instance can be used.</td>
</tr>
<tr>
    <td><CopyableCode code="marketplace" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the offering is available through the Reserved Instance Marketplace (resale) or Amazon Web Services. If it's a Reserved Instance Marketplace offering, this is true.</td>
</tr>
<tr>
    <td><CopyableCode code="offering_class" /></td>
    <td><code>string</code></td>
    <td>If convertible it can be exchanged for Reserved Instances of the same or higher monetary value, with different configurations. If standard, it is not possible to perform an exchange.</td>
</tr>
<tr>
    <td><CopyableCode code="offering_type" /></td>
    <td><code>string</code></td>
    <td>The Reserved Instance offering type.</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_details" /></td>
    <td><code>string</code></td>
    <td>The pricing details of the Reserved Instance offering.</td>
</tr>
<tr>
    <td><CopyableCode code="product_description" /></td>
    <td><code>string</code></td>
    <td>The Reserved Instance product platform description.</td>
</tr>
<tr>
    <td><CopyableCode code="recurring_charges" /></td>
    <td><code>string</code></td>
    <td>The recurring charge tag assigned to the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="reserved_instances_offering_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Reserved Instance offering. This is the offering ID used in GetReservedInstancesExchangeQuote to confirm that an exchange can be made.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Whether the Reserved Instance is applied to instances in a Region or an Availability Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="usage_price" /></td>
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
    <td><a href="#describe_reserved_instances_offerings"><CopyableCode code="describe_reserved_instances_offerings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a>, <a href="#parameter-IncludeMarketplace"><code>IncludeMarketplace</code></a>, <a href="#parameter-InstanceType"><code>InstanceType</code></a>, <a href="#parameter-MaxDuration"><code>MaxDuration</code></a>, <a href="#parameter-MaxInstanceCount"><code>MaxInstanceCount</code></a>, <a href="#parameter-MinDuration"><code>MinDuration</code></a>, <a href="#parameter-OfferingClass"><code>OfferingClass</code></a>, <a href="#parameter-ProductDescription"><code>ProductDescription</code></a>, <a href="#parameter-ReservedInstancesOfferingId"><code>ReservedInstancesOfferingId</code></a>, <a href="#parameter-AvailabilityZoneId"><code>AvailabilityZoneId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-InstanceTenancy"><code>InstanceTenancy</code></a>, <a href="#parameter-OfferingType"><code>OfferingType</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Describes Reserved Instance offerings that are available for purchase. With Reserved Instances, you purchase the right to launch instances for a period of time. During that time period, you do not receive insufficient capacity errors, and you pay a lower usage rate than the rate charged for On-Demand instances for the actual time used. If you have listed your own Reserved Instances for sale in the Reserved Instance Marketplace, they will be excluded from these results. This is to ensure that you do not purchase your own Reserved Instances. For more information, see Sell in the Reserved Instance Marketplace in the Amazon EC2 User Guide. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.</td>
</tr>
<tr>
    <td><a href="#purchase_reserved_instances_offering"><CopyableCode code="purchase_reserved_instances_offering" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InstanceCount"><code>InstanceCount</code></a>, <a href="#parameter-ReservedInstancesOfferingId"><code>ReservedInstancesOfferingId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PurchaseTime"><code>PurchaseTime</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-LimitPrice"><code>LimitPrice</code></a></td>
    <td>Purchases a Reserved Instance for use with your account. With Reserved Instances, you pay a lower hourly rate compared to On-Demand instance pricing. Use DescribeReservedInstancesOfferings to get a list of Reserved Instance offerings that match your specifications. After you've purchased a Reserved Instance, you can check for your new Reserved Instance with DescribeReservedInstances. To queue a purchase for a future date and time, specify a purchase time. If you do not specify a purchase time, the default is the current time. For more information, see Reserved Instances and Sell in the Reserved Instance Marketplace in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-InstanceCount">
    <td><CopyableCode code="InstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of Reserved Instances to purchase.</td>
</tr>
<tr id="parameter-ReservedInstancesOfferingId">
    <td><CopyableCode code="ReservedInstancesOfferingId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Reserved Instance offering to purchase.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AvailabilityZone">
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone in which the Reserved Instance can be used. Either AvailabilityZone or AvailabilityZoneId can be specified, but not both.</td>
</tr>
<tr id="parameter-AvailabilityZoneId">
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone. Either AvailabilityZone or AvailabilityZoneId can be specified, but not both.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. availability-zone - The Availability Zone where the Reserved Instance can be used. availability-zone-id - The ID of the Availability Zone where the Reserved Instance can be used. duration - The duration of the Reserved Instance (for example, one year or three years), in seconds (31536000 | 94608000). fixed-price - The purchase price of the Reserved Instance (for example, 9800.0). instance-type - The instance type that is covered by the reservation. marketplace - Set to true to show only Reserved Instance Marketplace offerings. When this filter is not used, which is the default behavior, all offerings from both Amazon Web Services and the Reserved Instance Marketplace are listed. product-description - The Reserved Instance product platform description (Linux/UNIX | Linux with SQL Server Standard | Linux with SQL Server Web | Linux with SQL Server Enterprise | SUSE Linux | Red Hat Enterprise Linux | Red Hat Enterprise Linux with HA | Windows | Windows with SQL Server Standard | Windows with SQL Server Web | Windows with SQL Server Enterprise). reserved-instances-offering-id - The Reserved Instances offering ID. scope - The scope of the Reserved Instance (Availability Zone or Region). usage-price - The usage price of the Reserved Instance, per hour (for example, 0.84).</td>
</tr>
<tr id="parameter-IncludeMarketplace">
    <td><CopyableCode code="IncludeMarketplace" /></td>
    <td><code>boolean</code></td>
    <td>Include Reserved Instance Marketplace offerings in the response.</td>
</tr>
<tr id="parameter-InstanceTenancy">
    <td><CopyableCode code="InstanceTenancy" /></td>
    <td><code>string</code></td>
    <td>The tenancy of the instances covered by the reservation. A Reserved Instance with a tenancy of dedicated is applied to instances that run in a VPC on single-tenant hardware (i.e., Dedicated Instances). Important: The host value cannot be used with this parameter. Use the default or dedicated values only. Default: default</td>
</tr>
<tr id="parameter-InstanceType">
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>The instance type that the reservation will cover (for example, m1.small). For more information, see Amazon EC2 instance types in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-LimitPrice">
    <td><CopyableCode code="LimitPrice" /></td>
    <td><code>object</code></td>
    <td>Specified for Reserved Instance Marketplace offerings to limit the total order and ensure that the Reserved Instances are not purchased at unexpected prices.</td>
</tr>
<tr id="parameter-MaxDuration">
    <td><CopyableCode code="MaxDuration" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum duration (in seconds) to filter when searching for offerings. Default: 94608000 (3 years)</td>
</tr>
<tr id="parameter-MaxInstanceCount">
    <td><CopyableCode code="MaxInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of instances to filter when searching for offerings. Default: 20</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for the request in a single page. The remaining results of the initial request can be seen by sending another request with the returned NextToken value. The maximum is 100. Default: 100</td>
</tr>
<tr id="parameter-MinDuration">
    <td><CopyableCode code="MinDuration" /></td>
    <td><code>integer (int64)</code></td>
    <td>The minimum duration (in seconds) to filter when searching for offerings. Default: 2592000 (1 month)</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next page of results.</td>
</tr>
<tr id="parameter-OfferingClass">
    <td><CopyableCode code="OfferingClass" /></td>
    <td><code>string</code></td>
    <td>The offering class of the Reserved Instance. Can be standard or convertible.</td>
</tr>
<tr id="parameter-OfferingType">
    <td><CopyableCode code="OfferingType" /></td>
    <td><code>string</code></td>
    <td>The Reserved Instance offering type. If you are using tools that predate the 2011-11-01 API version, you only have access to the Medium Utilization Reserved Instance offering type.</td>
</tr>
<tr id="parameter-ProductDescription">
    <td><CopyableCode code="ProductDescription" /></td>
    <td><code>string</code></td>
    <td>The Reserved Instance product platform description. Instances that include (Amazon VPC) in the description are for use with Amazon VPC.</td>
</tr>
<tr id="parameter-PurchaseTime">
    <td><CopyableCode code="PurchaseTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which to purchase the Reserved Instance, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ).</td>
</tr>
<tr id="parameter-ReservedInstancesOfferingId">
    <td><CopyableCode code="ReservedInstancesOfferingId" /></td>
    <td><code>array</code></td>
    <td>One or more Reserved Instances offering IDs.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_reserved_instances_offerings"
    values={[
        { label: 'describe_reserved_instances_offerings', value: 'describe_reserved_instances_offerings' }
    ]}
>
<TabItem value="describe_reserved_instances_offerings">

Describes Reserved Instance offerings that are available for purchase. With Reserved Instances, you purchase the right to launch instances for a period of time. During that time period, you do not receive insufficient capacity errors, and you pay a lower usage rate than the rate charged for On-Demand instances for the actual time used. If you have listed your own Reserved Instances for sale in the Reserved Instance Marketplace, they will be excluded from these results. This is to ensure that you do not purchase your own Reserved Instances. For more information, see Sell in the Reserved Instance Marketplace in the Amazon EC2 User Guide. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.

```sql
SELECT
availability_zone,
availability_zone_id,
currency_code,
duration,
fixed_price,
instance_tenancy,
instance_type,
marketplace,
offering_class,
offering_type,
pricing_details,
product_description,
recurring_charges,
reserved_instances_offering_id,
scope,
usage_price
FROM aws.ec2.reserved_instances_offerings
WHERE region = '{{ region }}' -- required
AND AvailabilityZone = '{{ AvailabilityZone }}'
AND IncludeMarketplace = '{{ IncludeMarketplace }}'
AND InstanceType = '{{ InstanceType }}'
AND MaxDuration = '{{ MaxDuration }}'
AND MaxInstanceCount = '{{ MaxInstanceCount }}'
AND MinDuration = '{{ MinDuration }}'
AND OfferingClass = '{{ OfferingClass }}'
AND ProductDescription = '{{ ProductDescription }}'
AND ReservedInstancesOfferingId = '{{ ReservedInstancesOfferingId }}'
AND AvailabilityZoneId = '{{ AvailabilityZoneId }}'
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND InstanceTenancy = '{{ InstanceTenancy }}'
AND OfferingType = '{{ OfferingType }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="purchase_reserved_instances_offering"
    values={[
        { label: 'purchase_reserved_instances_offering', value: 'purchase_reserved_instances_offering' }
    ]}
>
<TabItem value="purchase_reserved_instances_offering">

Purchases a Reserved Instance for use with your account. With Reserved Instances, you pay a lower hourly rate compared to On-Demand instance pricing. Use DescribeReservedInstancesOfferings to get a list of Reserved Instance offerings that match your specifications. After you've purchased a Reserved Instance, you can check for your new Reserved Instance with DescribeReservedInstances. To queue a purchase for a future date and time, specify a purchase time. If you do not specify a purchase time, the default is the current time. For more information, see Reserved Instances and Sell in the Reserved Instance Marketplace in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2.reserved_instances_offerings.purchase_reserved_instances_offering 
@InstanceCount='{{ InstanceCount }}' --required, 
@ReservedInstancesOfferingId='{{ ReservedInstancesOfferingId }}' --required, 
@region='{{ region }}' --required, 
@PurchaseTime='{{ PurchaseTime }}', 
@DryRun={{ DryRun }}, 
@LimitPrice='{{ LimitPrice }}'
;
```
</TabItem>
</Tabs>
