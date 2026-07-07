--- 
title: route_server_propagations
hide_title: false
hide_table_of_contents: false
keywords:
  - route_server_propagations
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

Creates, updates, deletes, gets or lists a <code>route_server_propagations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="route_server_propagations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.route_server_propagations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_route_server_propagations"
    values={[
        { label: 'get_route_server_propagations', value: 'get_route_server_propagations' }
    ]}
>
<TabItem value="get_route_server_propagations">

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
    <td><CopyableCode code="RouteServerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the route server configured for route propagation.</td>
</tr>
<tr>
    <td><CopyableCode code="RouteTableId" /></td>
    <td><code>string</code></td>
    <td>The ID of the route table configured for route server propagation.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of route propagation.</td>
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
    <td><a href="#get_route_server_propagations"><CopyableCode code="get_route_server_propagations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-RouteServerId"><code>RouteServerId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RouteTableId"><code>RouteTableId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Gets information about the route propagations for the specified route server. When enabled, route server propagation installs the routes in the FIB on the route table you've specified. Route server supports IPv4 and IPv6 route propagation. Amazon VPC Route Server simplifies routing for traffic between workloads that are deployed within a VPC and its internet gateways. With this feature, VPC Route Server dynamically updates VPC and internet gateway route tables with your preferred IPv4 or IPv6 routes to achieve routing fault tolerance for those workloads. This enables you to automatically reroute traffic within a VPC, which increases the manageability of VPC routing and interoperability with third-party workloads. Route server supports the follow route table types: VPC route tables not associated with subnets Subnet route tables Internet gateway route tables Route server does not support route tables associated with virtual private gateways. To propagate routes into a transit gateway route table, use Transit Gateway Connect.</td>
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
<tr id="parameter-RouteServerId">
    <td><CopyableCode code="RouteServerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the route server for which to get propagation information.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-RouteTableId">
    <td><CopyableCode code="RouteTableId" /></td>
    <td><code>string</code></td>
    <td>The ID of the route table for which to get propagation information.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_route_server_propagations"
    values={[
        { label: 'get_route_server_propagations', value: 'get_route_server_propagations' }
    ]}
>
<TabItem value="get_route_server_propagations">

Gets information about the route propagations for the specified route server. When enabled, route server propagation installs the routes in the FIB on the route table you've specified. Route server supports IPv4 and IPv6 route propagation. Amazon VPC Route Server simplifies routing for traffic between workloads that are deployed within a VPC and its internet gateways. With this feature, VPC Route Server dynamically updates VPC and internet gateway route tables with your preferred IPv4 or IPv6 routes to achieve routing fault tolerance for those workloads. This enables you to automatically reroute traffic within a VPC, which increases the manageability of VPC routing and interoperability with third-party workloads. Route server supports the follow route table types: VPC route tables not associated with subnets Subnet route tables Internet gateway route tables Route server does not support route tables associated with virtual private gateways. To propagate routes into a transit gateway route table, use Transit Gateway Connect.

```sql
SELECT
RouteServerId,
RouteTableId,
State
FROM aws.ec2.route_server_propagations
WHERE RouteServerId = '{{ RouteServerId }}' -- required
AND region = '{{ region }}' -- required
AND RouteTableId = '{{ RouteTableId }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
