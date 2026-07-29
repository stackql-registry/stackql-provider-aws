--- 
title: bill_estimate_line_items
hide_title: false
hide_table_of_contents: false
keywords:
  - bill_estimate_line_items
  - bcm_pricing_calculator
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

Creates, updates, deletes, gets or lists a <code>bill_estimate_line_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bill_estimate_line_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bcm_pricing_calculator.bill_estimate_line_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_bill_estimate_line_items"
    values={[
        { label: 'list_bill_estimate_line_items', value: 'list_bill_estimate_line_items' }
    ]}
>
<TabItem value="list_bill_estimate_line_items">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of this line item. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The availability zone associated with this line item, if applicable. (pattern: &lt;code&gt;&#91;-a-zA-Z0-9\.\-_:, \/()&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_cost" /></td>
    <td><code>object</code></td>
    <td>The estimated cost for this line item.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_usage_quantity" /></td>
    <td><code>object</code></td>
    <td>The estimated usage quantity for this line item.</td>
</tr>
<tr>
    <td><CopyableCode code="historical_cost" /></td>
    <td><code>object</code></td>
    <td>The historical cost for this line item.</td>
</tr>
<tr>
    <td><CopyableCode code="historical_usage_quantity" /></td>
    <td><code>object</code></td>
    <td>The historical usage quantity for this line item.</td>
</tr>
<tr>
    <td><CopyableCode code="line_item_id" /></td>
    <td><code>string</code></td>
    <td>The line item identifier from the original bill.</td>
</tr>
<tr>
    <td><CopyableCode code="line_item_type" /></td>
    <td><code>string</code></td>
    <td>The type of this line item (e.g., Usage, Tax, Credit).</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The location associated with this line item.</td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>The specific operation associated with this line item. (pattern: &lt;code&gt;&#91;-a-zA-Z0-9\.\-_:, \/()&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="payer_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the payer for this line item. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="savings_plan_arns" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of any Savings Plans applied to this line item.</td>
</tr>
<tr>
    <td><CopyableCode code="service_code" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service code associated with this line item. (pattern: &lt;code&gt;&#91;-a-zA-Z0-9\.\-_:, \/()&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID associated with the usage for this line item. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_type" /></td>
    <td><code>string</code></td>
    <td>The type of usage for this line item. (pattern: &lt;code&gt;&#91;-a-zA-Z0-9\.\-_:, \/()&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#list_bill_estimate_line_items"><CopyableCode code="list_bill_estimate_line_items" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the line items associated with a bill estimate.</td>
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
    defaultValue="list_bill_estimate_line_items"
    values={[
        { label: 'list_bill_estimate_line_items', value: 'list_bill_estimate_line_items' }
    ]}
>
<TabItem value="list_bill_estimate_line_items">

Lists the line items associated with a bill estimate.

```sql
SELECT
id,
availability_zone,
estimated_cost,
estimated_usage_quantity,
historical_cost,
historical_usage_quantity,
line_item_id,
line_item_type,
location,
operation,
payer_account_id,
savings_plan_arns,
service_code,
usage_account_id,
usage_type
FROM aws.bcm_pricing_calculator.bill_estimate_line_items
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
