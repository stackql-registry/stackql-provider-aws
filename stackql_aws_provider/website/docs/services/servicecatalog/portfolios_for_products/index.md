--- 
title: portfolios_for_products
hide_title: false
hide_table_of_contents: false
keywords:
  - portfolios_for_products
  - servicecatalog
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

Creates, updates, deletes, gets or lists a <code>portfolios_for_products</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="portfolios_for_products" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.portfolios_for_products" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_portfolios_for_product"
    values={[
        { label: 'list_portfolios_for_product', value: 'list_portfolios_for_product' }
    ]}
>
<TabItem value="list_portfolios_for_product">

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
    <td><CopyableCode code="ARN" /></td>
    <td><code>string</code></td>
    <td>The ARN assigned to the portfolio.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UTC time stamp of the creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the portfolio.</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The name to use for display purposes.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The portfolio identifier. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProviderName" /></td>
    <td><code>string</code></td>
    <td>The name of the portfolio provider.</td>
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
    <td><a href="#list_portfolios_for_product"><CopyableCode code="list_portfolios_for_product" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all portfolios that the specified product is associated with.</td>
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
    defaultValue="list_portfolios_for_product"
    values={[
        { label: 'list_portfolios_for_product', value: 'list_portfolios_for_product' }
    ]}
>
<TabItem value="list_portfolios_for_product">

Lists all portfolios that the specified product is associated with.

```sql
SELECT
ARN,
CreatedTime,
Description,
DisplayName,
Id,
ProviderName
FROM aws.servicecatalog.portfolios_for_products
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
