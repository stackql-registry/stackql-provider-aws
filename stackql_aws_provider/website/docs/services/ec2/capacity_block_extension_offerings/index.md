--- 
title: capacity_block_extension_offerings
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_block_extension_offerings
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

Creates, updates, deletes, gets or lists a <code>capacity_block_extension_offerings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capacity_block_extension_offerings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.capacity_block_extension_offerings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_capacity_block_extension_offerings"
    values={[
        { label: 'describe_capacity_block_extension_offerings', value: 'describe_capacity_block_extension_offerings' }
    ]}
>
<TabItem value="describe_capacity_block_extension_offerings">

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
    <td>The Availability Zone of the Capacity Block that will be extended.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone ID of the Capacity Block that will be extended.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_block_extension_duration_hours" /></td>
    <td><code>integer</code></td>
    <td>The amount of time of the Capacity Block extension offering in hours.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_block_extension_end_date" /></td>
    <td><code>string</code></td>
    <td>The date and time at which the Capacity Block extension expires. When a Capacity Block expires, the reserved capacity is released and you can no longer launch instances into it. The Capacity Block's state changes to expired when it reaches its end date</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_block_extension_offering_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Block extension offering.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_block_extension_start_date" /></td>
    <td><code>string</code></td>
    <td>The date and time at which the Capacity Block extension will start. This date is also the same as the end date of the Capacity Block that will be extended.</td>
</tr>
<tr>
    <td><CopyableCode code="currency_code" /></td>
    <td><code>string</code></td>
    <td>The currency of the payment for the Capacity Block extension offering.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_count" /></td>
    <td><code>integer</code></td>
    <td>The number of instances in the Capacity Block extension offering.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The instance type of the Capacity Block that will be extended.</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string</code></td>
    <td>The start date of the Capacity Block that will be extended.</td>
</tr>
<tr>
    <td><CopyableCode code="tenancy" /></td>
    <td><code>string</code></td>
    <td>Indicates the tenancy of the Capacity Block extension offering. A Capacity Block can have one of the following tenancy settings: default - The Capacity Block is created on hardware that is shared with other Amazon Web Services accounts. dedicated - The Capacity Block is created on single-tenant hardware that is dedicated to a single Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="upfront_fee" /></td>
    <td><code>string</code></td>
    <td>The total price of the Capacity Block extension offering, to be paid up front.</td>
</tr>
<tr>
    <td><CopyableCode code="zone_type" /></td>
    <td><code>string</code></td>
    <td>The type of zone where the Capacity Block extension offering is available.</td>
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
    <td><a href="#describe_capacity_block_extension_offerings"><CopyableCode code="describe_capacity_block_extension_offerings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-CapacityBlockExtensionDurationHours"><code>CapacityBlockExtensionDurationHours</code></a>, <a href="#parameter-CapacityReservationId"><code>CapacityReservationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Describes Capacity Block extension offerings available for purchase in the Amazon Web Services Region that you're currently using.</td>
</tr>
<tr>
    <td><a href="#purchase_capacity_block_extension"><CopyableCode code="purchase_capacity_block_extension" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-CapacityBlockExtensionOfferingId"><code>CapacityBlockExtensionOfferingId</code></a>, <a href="#parameter-CapacityReservationId"><code>CapacityReservationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Purchase the Capacity Block extension for use with your account. You must specify the ID of the Capacity Block extension offering you are purchasing.</td>
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
<tr id="parameter-CapacityBlockExtensionDurationHours">
    <td><CopyableCode code="CapacityBlockExtensionDurationHours" /></td>
    <td><code>integer</code></td>
    <td>The duration of the Capacity Block extension offering in hours.</td>
</tr>
<tr id="parameter-CapacityBlockExtensionOfferingId">
    <td><CopyableCode code="CapacityBlockExtensionOfferingId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Block extension offering to purchase.</td>
</tr>
<tr id="parameter-CapacityReservationId">
    <td><CopyableCode code="CapacityReservationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity reservation to be extended.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_capacity_block_extension_offerings"
    values={[
        { label: 'describe_capacity_block_extension_offerings', value: 'describe_capacity_block_extension_offerings' }
    ]}
>
<TabItem value="describe_capacity_block_extension_offerings">

Describes Capacity Block extension offerings available for purchase in the Amazon Web Services Region that you're currently using.

```sql
SELECT
availability_zone,
availability_zone_id,
capacity_block_extension_duration_hours,
capacity_block_extension_end_date,
capacity_block_extension_offering_id,
capacity_block_extension_start_date,
currency_code,
instance_count,
instance_type,
start_date,
tenancy,
upfront_fee,
zone_type
FROM aws.ec2.capacity_block_extension_offerings
WHERE CapacityBlockExtensionDurationHours = '{{ CapacityBlockExtensionDurationHours }}' -- required
AND CapacityReservationId = '{{ CapacityReservationId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="purchase_capacity_block_extension"
    values={[
        { label: 'purchase_capacity_block_extension', value: 'purchase_capacity_block_extension' }
    ]}
>
<TabItem value="purchase_capacity_block_extension">

Purchase the Capacity Block extension for use with your account. You must specify the ID of the Capacity Block extension offering you are purchasing.

```sql
EXEC aws.ec2.capacity_block_extension_offerings.purchase_capacity_block_extension 
@CapacityBlockExtensionOfferingId='{{ CapacityBlockExtensionOfferingId }}' --required, 
@CapacityReservationId='{{ CapacityReservationId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
