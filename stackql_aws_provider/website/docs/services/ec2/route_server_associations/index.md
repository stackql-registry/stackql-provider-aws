--- 
title: route_server_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - route_server_associations
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

Creates, updates, deletes, gets or lists a <code>route_server_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="route_server_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.route_server_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_route_server_associations"
    values={[
        { label: 'get_route_server_associations', value: 'get_route_server_associations' }
    ]}
>
<TabItem value="get_route_server_associations">

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
    <td>The ID of the associated route server.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the association.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the associated VPC.</td>
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
    <td><a href="#get_route_server_associations"><CopyableCode code="get_route_server_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-RouteServerId"><code>RouteServerId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Gets information about the associations for the specified route server. A route server association is the connection established between a route server and a VPC. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.</td>
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
    <td>The ID of the route server for which to get association information.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_route_server_associations"
    values={[
        { label: 'get_route_server_associations', value: 'get_route_server_associations' }
    ]}
>
<TabItem value="get_route_server_associations">

Gets information about the associations for the specified route server. A route server association is the connection established between a route server and a VPC. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.

```sql
SELECT
RouteServerId,
State,
VpcId
FROM aws.ec2.route_server_associations
WHERE RouteServerId = '{{ RouteServerId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
