--- 
title: savings_plan_rates
hide_title: false
hide_table_of_contents: false
keywords:
  - savings_plan_rates
  - savingsplans
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

Creates, updates, deletes, gets or lists a <code>savings_plan_rates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="savings_plan_rates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.savingsplans.savings_plan_rates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_savings_plan_rates"
    values={[
        { label: 'describe_savings_plan_rates', value: 'describe_savings_plan_rates' }
    ]}
>
<TabItem value="describe_savings_plan_rates">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. This value is null when there are no more results to return. (pattern: &lt;code&gt;^&#91;A-Za-z0-9/=\+&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="savingsPlanId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Savings Plan.</td>
</tr>
<tr>
    <td><CopyableCode code="searchResults" /></td>
    <td><code>array</code></td>
    <td>Information about the Savings Plan rates.</td>
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
    <td><a href="#describe_savings_plan_rates"><CopyableCode code="describe_savings_plan_rates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the rates for a specific, existing Savings Plan.</td>
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
    defaultValue="describe_savings_plan_rates"
    values={[
        { label: 'describe_savings_plan_rates', value: 'describe_savings_plan_rates' }
    ]}
>
<TabItem value="describe_savings_plan_rates">

Describes the rates for a specific, existing Savings Plan.

```sql
SELECT
nextToken,
savingsPlanId,
searchResults
FROM aws.savingsplans.savings_plan_rates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
