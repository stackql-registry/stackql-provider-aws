--- 
title: address_to_vpcs
hide_title: false
hide_table_of_contents: false
keywords:
  - address_to_vpcs
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

Creates, updates, deletes, gets or lists an <code>address_to_vpcs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="address_to_vpcs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.address_to_vpcs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#move_address_to_vpc"><CopyableCode code="move_address_to_vpc" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-PublicIp"><code>PublicIp</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>This action is deprecated. Moves an Elastic IP address from the EC2-Classic platform to the EC2-VPC platform. The Elastic IP address must be allocated to your account for more than 24 hours, and it must not be associated with an instance. After the Elastic IP address is moved, it is no longer available for use in the EC2-Classic platform. You cannot move an Elastic IP address that was originally allocated for use in the EC2-VPC platform to the EC2-Classic platform.</td>
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
<tr id="parameter-PublicIp">
    <td><CopyableCode code="PublicIp" /></td>
    <td><code>string</code></td>
    <td>The Elastic IP address.</td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="move_address_to_vpc"
    values={[
        { label: 'move_address_to_vpc', value: 'move_address_to_vpc' }
    ]}
>
<TabItem value="move_address_to_vpc">

This action is deprecated. Moves an Elastic IP address from the EC2-Classic platform to the EC2-VPC platform. The Elastic IP address must be allocated to your account for more than 24 hours, and it must not be associated with an instance. After the Elastic IP address is moved, it is no longer available for use in the EC2-Classic platform. You cannot move an Elastic IP address that was originally allocated for use in the EC2-VPC platform to the EC2-Classic platform.

```sql
EXEC aws.ec2.address_to_vpcs.move_address_to_vpc 
@PublicIp='{{ PublicIp }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
