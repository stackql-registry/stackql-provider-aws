--- 
title: credit_allocation_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - credit_allocation_histories
  - billing
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

Creates, updates, deletes, gets or lists a <code>credit_allocation_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="credit_allocation_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.billing.credit_allocation_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_credit_allocation_history"
    values={[
        { label: 'get_credit_allocation_history', value: 'get_credit_allocation_history' }
    ]}
>
<TabItem value="get_credit_allocation_history">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account the credit was applied to. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="applied_service_name" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service the credit was applied to.</td>
</tr>
<tr>
    <td><CopyableCode code="billing_month" /></td>
    <td><code>string</code></td>
    <td>The billing month of the application in YYYY-MM format.</td>
</tr>
<tr>
    <td><CopyableCode code="credit_amount" /></td>
    <td><code>object</code></td>
    <td>The amount of credit applied. Negative values represent credits that reduced the bill.</td>
</tr>
<tr>
    <td><CopyableCode code="credit_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the credit that was applied. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human-readable description of the credit allocation.</td>
</tr>
<tr>
    <td><CopyableCode code="is_estimated_bill" /></td>
    <td><code>boolean</code></td>
    <td>true when the entry was applied to an in-flight bill that has not yet been finalized.</td>
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
    <td><a href="#get_credit_allocation_history"><CopyableCode code="get_credit_allocation_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the per-billing-month allocation history for credits applied to an Amazon Web Services account's bills. Traverses the consolidated billing family to capture cross-account credit applications. Supports pagination and optional filtering to a single credit.</td>
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
    defaultValue="get_credit_allocation_history"
    values={[
        { label: 'get_credit_allocation_history', value: 'get_credit_allocation_history' }
    ]}
>
<TabItem value="get_credit_allocation_history">

Returns the per-billing-month allocation history for credits applied to an Amazon Web Services account's bills. Traverses the consolidated billing family to capture cross-account credit applications. Supports pagination and optional filtering to a single credit.

```sql
SELECT
account_id,
applied_service_name,
billing_month,
credit_amount,
credit_id,
description,
is_estimated_bill
FROM aws.billing.credit_allocation_histories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
