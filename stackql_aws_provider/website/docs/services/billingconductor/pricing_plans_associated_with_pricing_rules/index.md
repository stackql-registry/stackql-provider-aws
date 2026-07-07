--- 
title: pricing_plans_associated_with_pricing_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - pricing_plans_associated_with_pricing_rules
  - billingconductor
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

Creates, updates, deletes, gets or lists a <code>pricing_plans_associated_with_pricing_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pricing_plans_associated_with_pricing_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.billingconductor.pricing_plans_associated_with_pricing_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_pricing_plans_associated_with_pricing_rule"
    values={[
        { label: 'list_pricing_plans_associated_with_pricing_rule', value: 'list_pricing_plans_associated_with_pricing_rule' }
    ]}
>
<TabItem value="list_pricing_plans_associated_with_pricing_rule">

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
    <td><CopyableCode code="pricing_plan_arn" /></td>
    <td><code>string</code></td>
    <td>The list containing pricing plans that are associated with the requested pricing rule.</td>
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
    <td><a href="#list_pricing_plans_associated_with_pricing_rule"><CopyableCode code="list_pricing_plans_associated_with_pricing_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>A list of the pricing plans that are associated with a pricing rule.</td>
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
    defaultValue="list_pricing_plans_associated_with_pricing_rule"
    values={[
        { label: 'list_pricing_plans_associated_with_pricing_rule', value: 'list_pricing_plans_associated_with_pricing_rule' }
    ]}
>
<TabItem value="list_pricing_plans_associated_with_pricing_rule">

A list of the pricing plans that are associated with a pricing rule.

```sql
SELECT
pricing_plan_arn
FROM aws.billingconductor.pricing_plans_associated_with_pricing_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
