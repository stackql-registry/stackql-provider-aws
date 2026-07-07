--- 
title: pricing_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - pricing_plans
  - iottwinmaker
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

Creates, updates, deletes, gets or lists a <code>pricing_plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pricing_plans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iottwinmaker.pricing_plans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pricing_plan"
    values={[
        { label: 'get_pricing_plan', value: 'get_pricing_plan' }
    ]}
>
<TabItem value="get_pricing_plan">

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
    <td><CopyableCode code="currentPricingPlan" /></td>
    <td><code>object</code></td>
    <td>The chosen pricing plan for the current billing cycle.</td>
</tr>
<tr>
    <td><CopyableCode code="pendingPricingPlan" /></td>
    <td><code>object</code></td>
    <td>The pending pricing plan.</td>
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
    <td><a href="#get_pricing_plan"><CopyableCode code="get_pricing_plan" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the pricing plan.</td>
</tr>
<tr>
    <td><a href="#update_pricing_plan"><CopyableCode code="update_pricing_plan" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pricingMode"><code>pricingMode</code></a></td>
    <td></td>
    <td>Update the pricing plan.</td>
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
    defaultValue="get_pricing_plan"
    values={[
        { label: 'get_pricing_plan', value: 'get_pricing_plan' }
    ]}
>
<TabItem value="get_pricing_plan">

Gets the pricing plan.

```sql
SELECT
currentPricingPlan,
pendingPricingPlan
FROM aws.iottwinmaker.pricing_plans
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_pricing_plan"
    values={[
        { label: 'update_pricing_plan', value: 'update_pricing_plan' }
    ]}
>
<TabItem value="update_pricing_plan">

Update the pricing plan.

```sql
UPDATE aws.iottwinmaker.pricing_plans
SET 
pricingMode = '{{ pricingMode }}',
bundleNames = '{{ bundleNames }}'
WHERE 
region = '{{ region }}' --required
AND pricingMode = '{{ pricingMode }}' --required
RETURNING
currentPricingPlan,
pendingPricingPlan;
```
</TabItem>
</Tabs>
