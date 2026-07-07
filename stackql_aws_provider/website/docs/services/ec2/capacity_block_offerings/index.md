--- 
title: capacity_block_offerings
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_block_offerings
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

Creates, updates, deletes, gets or lists a <code>capacity_block_offerings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capacity_block_offerings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.capacity_block_offerings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_capacity_block_offerings"
    values={[
        { label: 'describe_capacity_block_offerings', value: 'describe_capacity_block_offerings' }
    ]}
>
<TabItem value="describe_capacity_block_offerings">

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
    <td>The Availability Zone of the Capacity Block offering.</td>
</tr>
<tr>
    <td><CopyableCode code="CapacityBlockDurationHours" /></td>
    <td><code>integer</code></td>
    <td>The number of hours (in addition to capacityBlockDurationMinutes) for the duration of the Capacity Block reservation. For example, if a Capacity Block starts at 04:55 and ends at 11:30, the hours field would be 6.</td>
</tr>
<tr>
    <td><CopyableCode code="CapacityBlockDurationMinutes" /></td>
    <td><code>integer</code></td>
    <td>The number of minutes (in addition to capacityBlockDurationHours) for the duration of the Capacity Block reservation. For example, if a Capacity Block starts at 08:55 and ends at 11:30, the minutes field would be 35.</td>
</tr>
<tr>
    <td><CopyableCode code="CapacityBlockOfferingId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Block offering.</td>
</tr>
<tr>
    <td><CopyableCode code="CurrencyCode" /></td>
    <td><code>string</code></td>
    <td>The currency of the payment for the Capacity Block.</td>
</tr>
<tr>
    <td><CopyableCode code="EndDate" /></td>
    <td><code>string</code></td>
    <td>The end date of the Capacity Block offering.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of instances in the Capacity Block offering.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>The instance type of the Capacity Block offering.</td>
</tr>
<tr>
    <td><CopyableCode code="StartDate" /></td>
    <td><code>string</code></td>
    <td>The start date of the Capacity Block offering.</td>
</tr>
<tr>
    <td><CopyableCode code="Tenancy" /></td>
    <td><code>string</code></td>
    <td>The tenancy of the Capacity Block.</td>
</tr>
<tr>
    <td><CopyableCode code="UltraserverCount" /></td>
    <td><code>integer</code></td>
    <td>The number of EC2 UltraServers in the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="UltraserverType" /></td>
    <td><code>string</code></td>
    <td>The EC2 UltraServer type of the Capacity Block offering.</td>
</tr>
<tr>
    <td><CopyableCode code="UpfrontFee" /></td>
    <td><code>string</code></td>
    <td>The total price to be paid up front.</td>
</tr>
<tr>
    <td><CopyableCode code="ZoneType" /></td>
    <td><code>string</code></td>
    <td>The type of zone where the Capacity Block offering is available.</td>
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
    <td><a href="#describe_capacity_block_offerings"><CopyableCode code="describe_capacity_block_offerings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-CapacityDurationHours"><code>CapacityDurationHours</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-InstanceType"><code>InstanceType</code></a>, <a href="#parameter-InstanceCount"><code>InstanceCount</code></a>, <a href="#parameter-StartDateRange"><code>StartDateRange</code></a>, <a href="#parameter-EndDateRange"><code>EndDateRange</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-UltraserverType"><code>UltraserverType</code></a>, <a href="#parameter-UltraserverCount"><code>UltraserverCount</code></a>, <a href="#parameter-AllAvailabilityZones"><code>AllAvailabilityZones</code></a></td>
    <td>Describes Capacity Block offerings available for purchase in the Amazon Web Services Region that you're currently using. With Capacity Blocks, you can purchase a specific GPU instance type or EC2 UltraServer for a period of time. To search for an available Capacity Block offering, you specify a reservation duration and instance count.</td>
</tr>
<tr>
    <td><a href="#purchase_capacity_block"><CopyableCode code="purchase_capacity_block" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-CapacityBlockOfferingId"><code>CapacityBlockOfferingId</code></a>, <a href="#parameter-InstancePlatform"><code>InstancePlatform</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Purchase the Capacity Block for use with your account. With Capacity Blocks you ensure GPU capacity is available for machine learning (ML) workloads. You must specify the ID of the Capacity Block offering you are purchasing.</td>
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
<tr id="parameter-CapacityBlockOfferingId">
    <td><CopyableCode code="CapacityBlockOfferingId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Block offering.</td>
</tr>
<tr id="parameter-CapacityDurationHours">
    <td><CopyableCode code="CapacityDurationHours" /></td>
    <td><code>integer</code></td>
    <td>The reservation duration for the Capacity Block, in hours. You must specify the duration in 1-day increments up 14 days, and in 7-day increments up to 182 days.</td>
</tr>
<tr id="parameter-InstancePlatform">
    <td><CopyableCode code="InstancePlatform" /></td>
    <td><code>string</code></td>
    <td>The type of operating system for which to reserve capacity.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AllAvailabilityZones">
    <td><CopyableCode code="AllAvailabilityZones" /></td>
    <td><code>boolean</code></td>
    <td>Include all Availability Zones and Local Zones, regardless of your opt-in status. If you do not use this parameter, the results include available offerings from all Availability Zones in the Amazon Web Services Region and Local Zones you are opted into.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-EndDateRange">
    <td><CopyableCode code="EndDateRange" /></td>
    <td><code>string (date-time)</code></td>
    <td>The latest end date for the Capacity Block offering.</td>
</tr>
<tr id="parameter-InstanceCount">
    <td><CopyableCode code="InstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of instances for which to reserve capacity. Each Capacity Block can have up to 64 instances, and you can have up to 256 instances across Capacity Blocks.</td>
</tr>
<tr id="parameter-InstanceType">
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>The type of instance for which the Capacity Block offering reserves capacity.</td>
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
<tr id="parameter-StartDateRange">
    <td><CopyableCode code="StartDateRange" /></td>
    <td><code>string (date-time)</code></td>
    <td>The earliest start date for the Capacity Block offering.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the Capacity Block during launch.</td>
</tr>
<tr id="parameter-UltraserverCount">
    <td><CopyableCode code="UltraserverCount" /></td>
    <td><code>integer</code></td>
    <td>The number of EC2 UltraServers in the offerings.</td>
</tr>
<tr id="parameter-UltraserverType">
    <td><CopyableCode code="UltraserverType" /></td>
    <td><code>string</code></td>
    <td>The EC2 UltraServer type of the Capacity Block offerings.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_capacity_block_offerings"
    values={[
        { label: 'describe_capacity_block_offerings', value: 'describe_capacity_block_offerings' }
    ]}
>
<TabItem value="describe_capacity_block_offerings">

Describes Capacity Block offerings available for purchase in the Amazon Web Services Region that you're currently using. With Capacity Blocks, you can purchase a specific GPU instance type or EC2 UltraServer for a period of time. To search for an available Capacity Block offering, you specify a reservation duration and instance count.

```sql
SELECT
AvailabilityZone,
CapacityBlockDurationHours,
CapacityBlockDurationMinutes,
CapacityBlockOfferingId,
CurrencyCode,
EndDate,
InstanceCount,
InstanceType,
StartDate,
Tenancy,
UltraserverCount,
UltraserverType,
UpfrontFee,
ZoneType
FROM aws.ec2.capacity_block_offerings
WHERE CapacityDurationHours = '{{ CapacityDurationHours }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND InstanceType = '{{ InstanceType }}'
AND InstanceCount = '{{ InstanceCount }}'
AND StartDateRange = '{{ StartDateRange }}'
AND EndDateRange = '{{ EndDateRange }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND UltraserverType = '{{ UltraserverType }}'
AND UltraserverCount = '{{ UltraserverCount }}'
AND AllAvailabilityZones = '{{ AllAvailabilityZones }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="purchase_capacity_block"
    values={[
        { label: 'purchase_capacity_block', value: 'purchase_capacity_block' }
    ]}
>
<TabItem value="purchase_capacity_block">

Purchase the Capacity Block for use with your account. With Capacity Blocks you ensure GPU capacity is available for machine learning (ML) workloads. You must specify the ID of the Capacity Block offering you are purchasing.

```sql
EXEC aws.ec2.capacity_block_offerings.purchase_capacity_block 
@CapacityBlockOfferingId='{{ CapacityBlockOfferingId }}' --required, 
@InstancePlatform='{{ InstancePlatform }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}, 
@TagSpecification='{{ TagSpecification }}'
;
```
</TabItem>
</Tabs>
