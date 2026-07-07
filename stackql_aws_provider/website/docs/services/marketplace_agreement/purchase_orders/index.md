--- 
title: purchase_orders
hide_title: false
hide_table_of_contents: false
keywords:
  - purchase_orders
  - marketplace_agreement
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

Creates, updates, deletes, gets or lists a <code>purchase_orders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="purchase_orders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplace_agreement.purchase_orders" /></td></tr>
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
    <td><a href="#update_purchase_orders"><CopyableCode code="update_purchase_orders" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-purchaseOrders"><code>purchaseOrders</code></a></td>
    <td></td>
    <td>Allows acceptors to associate purchase orders with agreement charges after an agreement is created.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="update_purchase_orders"
    values={[
        { label: 'update_purchase_orders', value: 'update_purchase_orders' }
    ]}
>
<TabItem value="update_purchase_orders">

Allows acceptors to associate purchase orders with agreement charges after an agreement is created.

```sql
UPDATE aws.marketplace_agreement.purchase_orders
SET 
purchaseOrders = '{{ purchaseOrders }}'
WHERE 
region = '{{ region }}' --required
AND purchaseOrders = '{{ purchaseOrders }}' --required;
```
</TabItem>
</Tabs>
