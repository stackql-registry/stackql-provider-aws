--- 
title: subnet_cidr_reservations
hide_title: false
hide_table_of_contents: false
keywords:
  - subnet_cidr_reservations
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

Creates, updates, deletes, gets or lists a <code>subnet_cidr_reservations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subnet_cidr_reservations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.subnet_cidr_reservations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_subnet_cidr_reservations"
    values={[
        { label: 'get_subnet_cidr_reservations', value: 'get_subnet_cidr_reservations' }
    ]}
>
<TabItem value="get_subnet_cidr_reservations">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</td>
</tr>
<tr>
    <td><CopyableCode code="SubnetIpv4CidrReservations" /></td>
    <td><code>string</code></td>
    <td>Information about the IPv4 subnet CIDR reservations.</td>
</tr>
<tr>
    <td><CopyableCode code="SubnetIpv6CidrReservations" /></td>
    <td><code>string</code></td>
    <td>Information about the IPv6 subnet CIDR reservations.</td>
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
    <td><a href="#get_subnet_cidr_reservations"><CopyableCode code="get_subnet_cidr_reservations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-SubnetId"><code>SubnetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Gets information about the subnet CIDR reservations.</td>
</tr>
<tr>
    <td><a href="#create_subnet_cidr_reservation"><CopyableCode code="create_subnet_cidr_reservation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-SubnetId"><code>SubnetId</code></a>, <a href="#parameter-ReservationType"><code>ReservationType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Cidr"><code>Cidr</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Creates a subnet CIDR reservation. For more information, see Subnet CIDR reservations in the Amazon VPC User Guide and Manage prefixes for your network interfaces in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_subnet_cidr_reservation"><CopyableCode code="delete_subnet_cidr_reservation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-SubnetCidrReservationId"><code>SubnetCidrReservationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes a subnet CIDR reservation.</td>
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
<tr id="parameter-ReservationType">
    <td><CopyableCode code="ReservationType" /></td>
    <td><code>string</code></td>
    <td>The type of reservation. The reservation type determines how the reserved IP addresses are assigned to resources. prefix - Amazon Web Services assigns the reserved IP addresses to network interfaces. explicit - You assign the reserved IP addresses to network interfaces.</td>
</tr>
<tr id="parameter-SubnetCidrReservationId">
    <td><CopyableCode code="SubnetCidrReservationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet CIDR reservation.</td>
</tr>
<tr id="parameter-SubnetId">
    <td><CopyableCode code="SubnetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Cidr">
    <td><CopyableCode code="Cidr" /></td>
    <td><code>string</code></td>
    <td>The IPv4 or IPV6 CIDR range to reserve.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description to assign to the subnet CIDR reservation.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. reservationType - The type of reservation (prefix | explicit). subnet-id - The ID of the subnet. tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the subnet CIDR reservation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_subnet_cidr_reservations"
    values={[
        { label: 'get_subnet_cidr_reservations', value: 'get_subnet_cidr_reservations' }
    ]}
>
<TabItem value="get_subnet_cidr_reservations">

Gets information about the subnet CIDR reservations.

```sql
SELECT
NextToken,
SubnetIpv4CidrReservations,
SubnetIpv6CidrReservations
FROM aws.ec2.subnet_cidr_reservations
WHERE SubnetId = '{{ SubnetId }}' -- required
AND region = '{{ region }}' -- required
AND Filter = '{{ Filter }}'
AND DryRun = '{{ DryRun }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_subnet_cidr_reservation"
    values={[
        { label: 'create_subnet_cidr_reservation', value: 'create_subnet_cidr_reservation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_subnet_cidr_reservation">

Creates a subnet CIDR reservation. For more information, see Subnet CIDR reservations in the Amazon VPC User Guide and Manage prefixes for your network interfaces in the Amazon EC2 User Guide.

```sql
INSERT INTO aws.ec2.subnet_cidr_reservations (
SubnetId,
ReservationType,
region,
Cidr,
Description,
DryRun,
TagSpecification
)
SELECT 
'{{ SubnetId }}',
'{{ ReservationType }}',
'{{ region }}',
'{{ Cidr }}',
'{{ Description }}',
'{{ DryRun }}',
'{{ TagSpecification }}'
RETURNING
Cidr,
Description,
OwnerId,
ReservationType,
SubnetCidrReservationId,
SubnetId,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: subnet_cidr_reservations
  props:
    - name: SubnetId
      value: "{{ SubnetId }}"
      description: Required parameter for the subnet_cidr_reservations resource.
    - name: ReservationType
      value: "{{ ReservationType }}"
      description: Required parameter for the subnet_cidr_reservations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the subnet_cidr_reservations resource.
    - name: Cidr
      value: "{{ Cidr }}"
      description: The IPv4 or IPV6 CIDR range to reserve.
      description: The IPv4 or IPV6 CIDR range to reserve.
    - name: Description
      value: "{{ Description }}"
      description: The description to assign to the subnet CIDR reservation.
      description: The description to assign to the subnet CIDR reservation.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the subnet CIDR reservation.
      description: The tags to assign to the subnet CIDR reservation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_subnet_cidr_reservation"
    values={[
        { label: 'delete_subnet_cidr_reservation', value: 'delete_subnet_cidr_reservation' }
    ]}
>
<TabItem value="delete_subnet_cidr_reservation">

Deletes a subnet CIDR reservation.

```sql
DELETE FROM aws.ec2.subnet_cidr_reservations
WHERE SubnetCidrReservationId = '{{ SubnetCidrReservationId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
