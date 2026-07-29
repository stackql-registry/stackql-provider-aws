--- 
title: capacity_reservations
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_reservations
  - elbv2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elbv2.capacity_reservations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_capacity_reservation"
    values={[
        { label: 'describe_capacity_reservation', value: 'describe_capacity_reservation' }
    ]}
>
<TabItem value="describe_capacity_reservation">

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
    <td>Information about the Availability Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="effective_capacity_units" /></td>
    <td><code>number</code></td>
    <td>The number of effective capacity units.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the capacity reservation.</td>
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
    <td><a href="#describe_capacity_reservation"><CopyableCode code="describe_capacity_reservation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-LoadBalancerArn"><code>LoadBalancerArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the capacity reservation status for the specified load balancer.</td>
</tr>
<tr>
    <td><a href="#modify_capacity_reservation"><CopyableCode code="modify_capacity_reservation" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-LoadBalancerArn"><code>LoadBalancerArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MinimumLoadBalancerCapacity"><code>MinimumLoadBalancerCapacity</code></a>, <a href="#parameter-ResetCapacityReservation"><code>ResetCapacityReservation</code></a></td>
    <td>Modifies the capacity reservation of the specified load balancer. When modifying capacity reservation, you must include at least one MinimumLoadBalancerCapacity or ResetCapacityReservation.</td>
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
<tr id="parameter-LoadBalancerArn">
    <td><CopyableCode code="LoadBalancerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the load balancer.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MinimumLoadBalancerCapacity">
    <td><CopyableCode code="MinimumLoadBalancerCapacity" /></td>
    <td><code>object</code></td>
    <td>The minimum load balancer capacity reserved.</td>
</tr>
<tr id="parameter-ResetCapacityReservation">
    <td><CopyableCode code="ResetCapacityReservation" /></td>
    <td><code>boolean</code></td>
    <td>Resets the capacity reservation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_capacity_reservation"
    values={[
        { label: 'describe_capacity_reservation', value: 'describe_capacity_reservation' }
    ]}
>
<TabItem value="describe_capacity_reservation">

Describes the capacity reservation status for the specified load balancer.

```sql
SELECT
availability_zone,
effective_capacity_units,
state
FROM aws.elbv2.capacity_reservations
WHERE LoadBalancerArn = '{{ LoadBalancerArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_capacity_reservation"
    values={[
        { label: 'modify_capacity_reservation', value: 'modify_capacity_reservation' }
    ]}
>
<TabItem value="modify_capacity_reservation">

Modifies the capacity reservation of the specified load balancer. When modifying capacity reservation, you must include at least one MinimumLoadBalancerCapacity or ResetCapacityReservation.

```sql
UPDATE aws.elbv2.capacity_reservations
SET 
-- No updatable properties
WHERE 
LoadBalancerArn = '{{ LoadBalancerArn }}' --required
AND region = '{{ region }}' --required
AND MinimumLoadBalancerCapacity = '{{ MinimumLoadBalancerCapacity}}'
AND ResetCapacityReservation = {{ ResetCapacityReservation}}
RETURNING
line_items;
```
</TabItem>
</Tabs>
