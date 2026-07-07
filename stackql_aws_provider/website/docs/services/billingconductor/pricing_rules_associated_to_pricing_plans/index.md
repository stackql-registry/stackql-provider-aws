--- 
title: pricing_rules_associated_to_pricing_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - pricing_rules_associated_to_pricing_plans
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

Creates, updates, deletes, gets or lists a <code>pricing_rules_associated_to_pricing_plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pricing_rules_associated_to_pricing_plans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.billingconductor.pricing_rules_associated_to_pricing_plans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_pricing_rules_associated_to_pricing_plan"
    values={[
        { label: 'list_pricing_rules_associated_to_pricing_plan', value: 'list_pricing_rules_associated_to_pricing_plan' }
    ]}
>
<TabItem value="list_pricing_rules_associated_to_pricing_plan">

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
    <td><CopyableCode code="pricing_rule_arn" /></td>
    <td><code>string</code></td>
    <td>A list containing pricing rules that are associated with the requested pricing plan.</td>
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
    <td><a href="#list_pricing_rules_associated_to_pricing_plan"><CopyableCode code="list_pricing_rules_associated_to_pricing_plan" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the pricing rules that are associated with a pricing plan.</td>
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
    defaultValue="list_pricing_rules_associated_to_pricing_plan"
    values={[
        { label: 'list_pricing_rules_associated_to_pricing_plan', value: 'list_pricing_rules_associated_to_pricing_plan' }
    ]}
>
<TabItem value="list_pricing_rules_associated_to_pricing_plan">

Lists the pricing rules that are associated with a pricing plan.

```sql
SELECT
pricing_rule_arn
FROM aws.billingconductor.pricing_rules_associated_to_pricing_plans
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
