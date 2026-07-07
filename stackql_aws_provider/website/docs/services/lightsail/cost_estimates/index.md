--- 
title: cost_estimates
hide_title: false
hide_table_of_contents: false
keywords:
  - cost_estimates
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>cost_estimates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cost_estimates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.cost_estimates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cost_estimate"
    values={[
        { label: 'get_cost_estimate', value: 'get_cost_estimate' }
    ]}
>
<TabItem value="get_cost_estimate">

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
    <td><CopyableCode code="resourcesBudgetEstimate" /></td>
    <td><code>array</code></td>
    <td>Returns the estimate's forecasted cost or usage.</td>
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
    <td><a href="#get_cost_estimate"><CopyableCode code="get_cost_estimate" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the cost estimate for a specified resource. A cost estimate will not generate for a resource that has been deleted.</td>
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
    defaultValue="get_cost_estimate"
    values={[
        { label: 'get_cost_estimate', value: 'get_cost_estimate' }
    ]}
>
<TabItem value="get_cost_estimate">

Retrieves information about the cost estimate for a specified resource. A cost estimate will not generate for a resource that has been deleted.

```sql
SELECT
resourcesBudgetEstimate
FROM aws.lightsail.cost_estimates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
