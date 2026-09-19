--- 
title: address_to_classics
hide_title: false
hide_table_of_contents: false
keywords:
  - address_to_classics
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

Creates, updates, deletes, gets or lists an <code>address_to_classics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="address_to_classics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.address_to_classics" /></td></tr>
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
    <td><a href="#restore_address_to_classic"><CopyableCode code="restore_address_to_classic" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-PublicIp"><code>PublicIp</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>This action is deprecated. Restores an Elastic IP address that was previously moved to the EC2-VPC platform back to the EC2-Classic platform. You cannot move an Elastic IP address that was originally allocated for use in EC2-VPC. The Elastic IP address must not be associated with an instance or network interface.</td>
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
    defaultValue="restore_address_to_classic"
    values={[
        { label: 'restore_address_to_classic', value: 'restore_address_to_classic' }
    ]}
>
<TabItem value="restore_address_to_classic">

This action is deprecated. Restores an Elastic IP address that was previously moved to the EC2-VPC platform back to the EC2-Classic platform. You cannot move an Elastic IP address that was originally allocated for use in EC2-VPC. The Elastic IP address must not be associated with an instance or network interface.

```sql
EXEC aws.ec2.address_to_classics.restore_address_to_classic 
@PublicIp='{{ PublicIp }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
