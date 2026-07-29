--- 
title: inventories
hide_title: false
hide_table_of_contents: false
keywords:
  - inventories
  - ssm
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

Creates, updates, deletes, gets or lists an <code>inventories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inventories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.inventories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_inventory"
    values={[
        { label: 'get_inventory', value: 'get_inventory' }
    ]}
>
<TabItem value="get_inventory">

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
    <td><CopyableCode code="data" /></td>
    <td><code>object</code></td>
    <td>The data section in the inventory result entity JSON.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>ID of the inventory result entity. For example, for managed node inventory the result will be the managed node ID. For EC2 instance inventory, the result will be the instance ID.</td>
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
    <td><a href="#get_inventory"><CopyableCode code="get_inventory" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Query inventory information. This includes managed node status, such as Stopped or Terminated.</td>
</tr>
<tr>
    <td><a href="#put_inventory"><CopyableCode code="put_inventory" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-Items"><code>Items</code></a></td>
    <td></td>
    <td>Bulk update custom inventory items on one or more managed nodes. The request adds an inventory item, if it doesn't already exist, or updates an inventory item, if it does exist.</td>
</tr>
<tr>
    <td><a href="#delete_inventory"><CopyableCode code="delete_inventory" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a custom inventory type or the data associated with a custom Inventory type. Deleting a custom inventory type is also referred to as deleting a custom inventory schema.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_inventory"
    values={[
        { label: 'get_inventory', value: 'get_inventory' }
    ]}
>
<TabItem value="get_inventory">

Query inventory information. This includes managed node status, such as Stopped or Terminated.

```sql
SELECT
data,
id
FROM aws.ssm.inventories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_inventory"
    values={[
        { label: 'put_inventory', value: 'put_inventory' }
    ]}
>
<TabItem value="put_inventory">

Bulk update custom inventory items on one or more managed nodes. The request adds an inventory item, if it doesn't already exist, or updates an inventory item, if it does exist.

```sql
REPLACE aws.ssm.inventories
SET 
InstanceId = '{{ InstanceId }}',
Items = '{{ Items }}'
WHERE 
region = '{{ region }}' --required
AND InstanceId = '{{ InstanceId }}' --required
AND Items = '{{ Items }}' --required
RETURNING
message;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_inventory"
    values={[
        { label: 'delete_inventory', value: 'delete_inventory' }
    ]}
>
<TabItem value="delete_inventory">

Delete a custom inventory type or the data associated with a custom Inventory type. Deleting a custom inventory type is also referred to as deleting a custom inventory schema.

```sql
DELETE FROM aws.ssm.inventories
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
