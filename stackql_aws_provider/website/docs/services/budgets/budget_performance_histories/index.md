--- 
title: budget_performance_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - budget_performance_histories
  - budgets
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

Creates, updates, deletes, gets or lists a <code>budget_performance_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="budget_performance_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.budgets.budget_performance_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_budget_performance_history"
    values={[
        { label: 'describe_budget_performance_history', value: 'describe_budget_performance_history' }
    ]}
>
<TabItem value="describe_budget_performance_history">

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
    <td><CopyableCode code="billing_view_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN is used to specify which particular billing view you want to interact with or retrieve information from when making API calls related to Amazon Web Services Billing and Cost Management features. The BillingViewArn can be retrieved by calling the ListBillingViews API. (pattern: &lt;code&gt;^arn:aws&#91;a-z-&#93;*:(billing)::&#91;0-9&#93;&#123;12&#125;:billingview/&#91;a-zA-Z0-9/:_\+=\.\-@&#93;&#123;0,75&#125;&#91;a-zA-Z0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="budget_name" /></td>
    <td><code>string</code></td>
    <td>A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed. (pattern: &lt;code&gt;^(?!&#91;^:\\&#93;*/action/|(?i).*&lt;script&gt;.*&lt;/script&gt;.*)&#91;^:\\&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="budget_type" /></td>
    <td><code>string</code></td>
    <td>The type of a budget. It must be one of the following types: COST, USAGE, RI_UTILIZATION, RI_COVERAGE, SAVINGS_PLANS_UTILIZATION, or SAVINGS_PLANS_COVERAGE. (USAGE, COST, RI_UTILIZATION, RI_COVERAGE, SAVINGS_PLANS_UTILIZATION, SAVINGS_PLANS_COVERAGE)</td>
</tr>
<tr>
    <td><CopyableCode code="budgeted_and_actual_amounts_list" /></td>
    <td><code>array</code></td>
    <td>A list of amounts of cost or usage that you created budgets for, which are compared to your actual costs or usage.</td>
</tr>
<tr>
    <td><CopyableCode code="cost_filters" /></td>
    <td><code>object</code></td>
    <td>The history of the cost filters for a budget during the specified time period.</td>
</tr>
<tr>
    <td><CopyableCode code="cost_types" /></td>
    <td><code>object</code></td>
    <td>The history of the cost types for a budget during the specified time period.</td>
</tr>
<tr>
    <td><CopyableCode code="filter_expression" /></td>
    <td><code>object</code></td>
    <td>Use Expression to filter in various Budgets APIs.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>array</code></td>
    <td>The definition for how the budget data is aggregated.</td>
</tr>
<tr>
    <td><CopyableCode code="time_unit" /></td>
    <td><code>string</code></td>
    <td>The time unit of the budget, such as MONTHLY or QUARTERLY. (DAILY, MONTHLY, QUARTERLY, ANNUALLY, CUSTOM)</td>
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
    <td><a href="#describe_budget_performance_history"><CopyableCode code="describe_budget_performance_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the history for DAILY, MONTHLY, and QUARTERLY budgets. Budget history isn't available for ANNUAL budgets.</td>
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
    defaultValue="describe_budget_performance_history"
    values={[
        { label: 'describe_budget_performance_history', value: 'describe_budget_performance_history' }
    ]}
>
<TabItem value="describe_budget_performance_history">

Describes the history for DAILY, MONTHLY, and QUARTERLY budgets. Budget history isn't available for ANNUAL budgets.

```sql
SELECT
billing_view_arn,
budget_name,
budget_type,
budgeted_and_actual_amounts_list,
cost_filters,
cost_types,
filter_expression,
metrics,
time_unit
FROM aws.budgets.budget_performance_histories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
