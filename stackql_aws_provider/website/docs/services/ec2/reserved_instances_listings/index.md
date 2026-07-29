--- 
title: reserved_instances_listings
hide_title: false
hide_table_of_contents: false
keywords:
  - reserved_instances_listings
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

Creates, updates, deletes, gets or lists a <code>reserved_instances_listings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reserved_instances_listings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.reserved_instances_listings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_reserved_instances_listings"
    values={[
        { label: 'describe_reserved_instances_listings', value: 'describe_reserved_instances_listings' }
    ]}
>
<TabItem value="describe_reserved_instances_listings">

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
    <td><CopyableCode code="client_token" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive key supplied by the client to ensure that the request is idempotent. For more information, see Ensuring Idempotency.</td>
</tr>
<tr>
    <td><CopyableCode code="create_date" /></td>
    <td><code>string</code></td>
    <td>The time the listing was created.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_counts" /></td>
    <td><code>string</code></td>
    <td>The number of instances in this state.</td>
</tr>
<tr>
    <td><CopyableCode code="price_schedules" /></td>
    <td><code>string</code></td>
    <td>The price of the Reserved Instance listing.</td>
</tr>
<tr>
    <td><CopyableCode code="reserved_instances_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Reserved Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="reserved_instances_listing_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Reserved Instance listing.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Reserved Instance listing.</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The reason for the current status of the Reserved Instance listing. The response can be blank.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="update_date" /></td>
    <td><code>string</code></td>
    <td>The last modified timestamp of the listing.</td>
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
    <td><a href="#describe_reserved_instances_listings"><CopyableCode code="describe_reserved_instances_listings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ReservedInstancesId"><code>ReservedInstancesId</code></a>, <a href="#parameter-ReservedInstancesListingId"><code>ReservedInstancesListingId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes your account's Reserved Instance listings in the Reserved Instance Marketplace. The Reserved Instance Marketplace matches sellers who want to resell Reserved Instance capacity that they no longer need with buyers who want to purchase additional capacity. Reserved Instances bought and sold through the Reserved Instance Marketplace work like any other Reserved Instances. As a seller, you choose to list some or all of your Reserved Instances, and you specify the upfront price to receive for them. Your Reserved Instances are then listed in the Reserved Instance Marketplace and are available for purchase. As a buyer, you specify the configuration of the Reserved Instance to purchase, and the Marketplace matches what you're searching for with what's available. The Marketplace first sells the lowest priced Reserved Instances to you, and continues to sell available Reserved Instance listings to you until your demand is met. You are charged based on the total price of all of the listings that you purchase. For more information, see Sell in the Reserved Instance Marketplace in the Amazon EC2 User Guide. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.</td>
</tr>
<tr>
    <td><a href="#create_reserved_instances_listing"><CopyableCode code="create_reserved_instances_listing" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ReservedInstancesId"><code>ReservedInstancesId</code></a>, <a href="#parameter-InstanceCount"><code>InstanceCount</code></a>, <a href="#parameter-PriceSchedules"><code>PriceSchedules</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a listing for Amazon EC2 Standard Reserved Instances to be sold in the Reserved Instance Marketplace. You can submit one Standard Reserved Instance listing at a time. To get a list of your Standard Reserved Instances, you can use the DescribeReservedInstances operation. Only Standard Reserved Instances can be sold in the Reserved Instance Marketplace. Convertible Reserved Instances cannot be sold. The Reserved Instance Marketplace matches sellers who want to resell Standard Reserved Instance capacity that they no longer need with buyers who want to purchase additional capacity. Reserved Instances bought and sold through the Reserved Instance Marketplace work like any other Reserved Instances. To sell your Standard Reserved Instances, you must first register as a seller in the Reserved Instance Marketplace. After completing the registration process, you can create a Reserved Instance Marketplace listing of some or all of your Standard Reserved Instances, and specify the upfront price to receive for them. Your Standard Reserved Instance listings then become available for purchase. To view the details of your Standard Reserved Instance listing, you can use the DescribeReservedInstancesListings operation. For more information, see Sell in the Reserved Instance Marketplace in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier you provide to ensure idempotency of your listings. This helps avoid duplicate listings. For more information, see Ensuring Idempotency.</td>
</tr>
<tr id="parameter-InstanceCount">
    <td><CopyableCode code="InstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of instances that are a part of a Reserved Instance account to be listed in the Reserved Instance Marketplace. This number should be less than or equal to the instance count associated with the Reserved Instance ID specified in this call.</td>
</tr>
<tr id="parameter-PriceSchedules">
    <td><CopyableCode code="PriceSchedules" /></td>
    <td><code>array</code></td>
    <td>A list specifying the price of the Standard Reserved Instance for each month remaining in the Reserved Instance term.</td>
</tr>
<tr id="parameter-ReservedInstancesId">
    <td><CopyableCode code="ReservedInstancesId" /></td>
    <td><code>string</code></td>
    <td>The ID of the active Standard Reserved Instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. reserved-instances-id - The ID of the Reserved Instances. reserved-instances-listing-id - The ID of the Reserved Instances listing. status - The status of the Reserved Instance listing (pending | active | cancelled | closed). status-message - The reason for the status.</td>
</tr>
<tr id="parameter-ReservedInstancesId">
    <td><CopyableCode code="ReservedInstancesId" /></td>
    <td><code>string</code></td>
    <td>One or more Reserved Instance IDs.</td>
</tr>
<tr id="parameter-ReservedInstancesListingId">
    <td><CopyableCode code="ReservedInstancesListingId" /></td>
    <td><code>string</code></td>
    <td>One or more Reserved Instance listing IDs.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_reserved_instances_listings"
    values={[
        { label: 'describe_reserved_instances_listings', value: 'describe_reserved_instances_listings' }
    ]}
>
<TabItem value="describe_reserved_instances_listings">

Describes your account's Reserved Instance listings in the Reserved Instance Marketplace. The Reserved Instance Marketplace matches sellers who want to resell Reserved Instance capacity that they no longer need with buyers who want to purchase additional capacity. Reserved Instances bought and sold through the Reserved Instance Marketplace work like any other Reserved Instances. As a seller, you choose to list some or all of your Reserved Instances, and you specify the upfront price to receive for them. Your Reserved Instances are then listed in the Reserved Instance Marketplace and are available for purchase. As a buyer, you specify the configuration of the Reserved Instance to purchase, and the Marketplace matches what you're searching for with what's available. The Marketplace first sells the lowest priced Reserved Instances to you, and continues to sell available Reserved Instance listings to you until your demand is met. You are charged based on the total price of all of the listings that you purchase. For more information, see Sell in the Reserved Instance Marketplace in the Amazon EC2 User Guide. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.

```sql
SELECT
client_token,
create_date,
instance_counts,
price_schedules,
reserved_instances_id,
reserved_instances_listing_id,
status,
status_message,
tags,
update_date
FROM aws.ec2.reserved_instances_listings
WHERE region = '{{ region }}' -- required
AND ReservedInstancesId = '{{ ReservedInstancesId }}'
AND ReservedInstancesListingId = '{{ ReservedInstancesListingId }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_reserved_instances_listing"
    values={[
        { label: 'create_reserved_instances_listing', value: 'create_reserved_instances_listing' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_reserved_instances_listing">

Creates a listing for Amazon EC2 Standard Reserved Instances to be sold in the Reserved Instance Marketplace. You can submit one Standard Reserved Instance listing at a time. To get a list of your Standard Reserved Instances, you can use the DescribeReservedInstances operation. Only Standard Reserved Instances can be sold in the Reserved Instance Marketplace. Convertible Reserved Instances cannot be sold. The Reserved Instance Marketplace matches sellers who want to resell Standard Reserved Instance capacity that they no longer need with buyers who want to purchase additional capacity. Reserved Instances bought and sold through the Reserved Instance Marketplace work like any other Reserved Instances. To sell your Standard Reserved Instances, you must first register as a seller in the Reserved Instance Marketplace. After completing the registration process, you can create a Reserved Instance Marketplace listing of some or all of your Standard Reserved Instances, and specify the upfront price to receive for them. Your Standard Reserved Instance listings then become available for purchase. To view the details of your Standard Reserved Instance listing, you can use the DescribeReservedInstancesListings operation. For more information, see Sell in the Reserved Instance Marketplace in the Amazon EC2 User Guide.

```sql
INSERT INTO aws.ec2.reserved_instances_listings (
ReservedInstancesId,
InstanceCount,
PriceSchedules,
ClientToken,
region
)
SELECT 
'{{ ReservedInstancesId }}',
'{{ InstanceCount }}',
'{{ PriceSchedules }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
reserved_instances_listings
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: reserved_instances_listings
  props:
    - name: ReservedInstancesId
      value: "{{ ReservedInstancesId }}"
      description: Required parameter for the reserved_instances_listings resource.
    - name: InstanceCount
      value: {{ InstanceCount }}
      description: Required parameter for the reserved_instances_listings resource.
    - name: PriceSchedules
      value: "{{ PriceSchedules }}"
      description: Required parameter for the reserved_instances_listings resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Required parameter for the reserved_instances_listings resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the reserved_instances_listings resource.
`}</CodeBlock>

</TabItem>
</Tabs>
