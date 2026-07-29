--- 
title: address_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - address_attributes
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

Creates, updates, deletes, gets or lists an <code>address_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="address_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.address_attributes" /></td></tr>
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
    <td><a href="#modify_address_attribute"><CopyableCode code="modify_address_attribute" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-AllocationId"><code>AllocationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies an attribute of the specified Elastic IP address. For requirements, see Using reverse DNS for email applications.</td>
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
<tr id="parameter-AllocationId">
    <td><CopyableCode code="AllocationId" /></td>
    <td><code>string</code></td>
    <td>&#91;EC2-VPC&#93; The allocation ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DomainName">
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td>The domain name to modify for the IP address.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="modify_address_attribute"
    values={[
        { label: 'modify_address_attribute', value: 'modify_address_attribute' }
    ]}
>
<TabItem value="modify_address_attribute">

Modifies an attribute of the specified Elastic IP address. For requirements, see Using reverse DNS for email applications.

```sql
UPDATE aws.ec2.address_attributes
SET 
-- No updatable properties
WHERE 
AllocationId = '{{ AllocationId }}' --required
AND region = '{{ region }}' --required
AND DomainName = '{{ DomainName}}'
AND DryRun = {{ DryRun}}
RETURNING
allocation_id,
ptr_record,
ptr_record_update,
public_ip;
```
</TabItem>
</Tabs>
