--- 
title: constraints_for_portfolios
hide_title: false
hide_table_of_contents: false
keywords:
  - constraints_for_portfolios
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

Creates, updates, deletes, gets or lists a <code>constraints_for_portfolios</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="constraints_for_portfolios" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.constraints_for_portfolios" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_constraints_for_portfolio"
    values={[
        { label: 'list_constraints_for_portfolio', value: 'list_constraints_for_portfolio' }
    ]}
>
<TabItem value="list_constraints_for_portfolio">

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
    <td><CopyableCode code="constraint_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the constraint. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the constraint.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the constraint. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="portfolio_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the portfolio the product resides in. The constraint applies only to the instance of the product that lives within this portfolio. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="product_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the product the constraint applies to. Note that a constraint applies to a specific instance of a product within a certain portfolio. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of constraint. LAUNCH NOTIFICATION STACKSET TEMPLATE</td>
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
    <td><a href="#list_constraints_for_portfolio"><CopyableCode code="list_constraints_for_portfolio" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the constraints for the specified portfolio and product.</td>
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
    defaultValue="list_constraints_for_portfolio"
    values={[
        { label: 'list_constraints_for_portfolio', value: 'list_constraints_for_portfolio' }
    ]}
>
<TabItem value="list_constraints_for_portfolio">

Lists the constraints for the specified portfolio and product.

```sql
SELECT
constraint_id,
description,
owner,
portfolio_id,
product_id,
type
FROM aws.servicecatalog.constraints_for_portfolios
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
