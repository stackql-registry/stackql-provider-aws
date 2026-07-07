--- 
title: managed_products_by_vendors
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_products_by_vendors
  - wafv2
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

Creates, updates, deletes, gets or lists a <code>managed_products_by_vendors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_products_by_vendors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wafv2.managed_products_by_vendors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_managed_products_by_vendor"
    values={[
        { label: 'describe_managed_products_by_vendor', value: 'describe_managed_products_by_vendor' }
    ]}
>
<TabItem value="describe_managed_products_by_vendor">

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
    <td><CopyableCode code="ManagedProducts" /></td>
    <td><code>array</code></td>
    <td>High-level information for the managed rule groups owned by the specified vendor.</td>
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
    <td><a href="#describe_managed_products_by_vendor"><CopyableCode code="describe_managed_products_by_vendor" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides high-level information for the managed rule groups owned by a specific vendor.</td>
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
    defaultValue="describe_managed_products_by_vendor"
    values={[
        { label: 'describe_managed_products_by_vendor', value: 'describe_managed_products_by_vendor' }
    ]}
>
<TabItem value="describe_managed_products_by_vendor">

Provides high-level information for the managed rule groups owned by a specific vendor.

```sql
SELECT
ManagedProducts
FROM aws.wafv2.managed_products_by_vendors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
