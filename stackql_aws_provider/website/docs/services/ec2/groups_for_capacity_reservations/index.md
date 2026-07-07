--- 
title: groups_for_capacity_reservations
hide_title: false
hide_table_of_contents: false
keywords:
  - groups_for_capacity_reservations
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

Creates, updates, deletes, gets or lists a <code>groups_for_capacity_reservations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="groups_for_capacity_reservations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.groups_for_capacity_reservations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_groups_for_capacity_reservation"
    values={[
        { label: 'get_groups_for_capacity_reservation', value: 'get_groups_for_capacity_reservation' }
    ]}
>
<TabItem value="get_groups_for_capacity_reservation">

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
    <td><CopyableCode code="GroupArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the resource group.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the resource group.</td>
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
    <td><a href="#get_groups_for_capacity_reservation"><CopyableCode code="get_groups_for_capacity_reservation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-CapacityReservationId"><code>CapacityReservationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Lists the resource groups to which a Capacity Reservation has been added.</td>
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
    <td>The ID of the Capacity Reservation. If you specify a Capacity Reservation that is shared with you, the operation returns only Capacity Reservation groups that you own.</td>
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
    defaultValue="get_groups_for_capacity_reservation"
    values={[
        { label: 'get_groups_for_capacity_reservation', value: 'get_groups_for_capacity_reservation' }
    ]}
>
<TabItem value="get_groups_for_capacity_reservation">

Lists the resource groups to which a Capacity Reservation has been added.

```sql
SELECT
GroupArn,
OwnerId
FROM aws.ec2.groups_for_capacity_reservations
WHERE CapacityReservationId = '{{ CapacityReservationId }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
