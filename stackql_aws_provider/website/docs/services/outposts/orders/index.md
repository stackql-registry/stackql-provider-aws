--- 
title: orders
hide_title: false
hide_table_of_contents: false
keywords:
  - orders
  - outposts
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

Creates, updates, deletes, gets or lists an <code>orders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="orders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.outposts.orders" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_order"
    values={[
        { label: 'get_order', value: 'get_order' },
        { label: 'list_orders', value: 'list_orders' }
    ]}
>
<TabItem value="get_order">

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
    <td><CopyableCode code="line_items" /></td>
    <td><code>array</code></td>
    <td>The line items for the order</td>
</tr>
<tr>
    <td><CopyableCode code="order_fulfilled_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The fulfillment date of the order.</td>
</tr>
<tr>
    <td><CopyableCode code="order_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the order. (pattern: &lt;code&gt;oo-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="order_submission_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The submission date for the order.</td>
</tr>
<tr>
    <td><CopyableCode code="order_type" /></td>
    <td><code>string</code></td>
    <td>The type of order. (OUTPOST, REPLACEMENT)</td>
</tr>
<tr>
    <td><CopyableCode code="outpost_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Outpost in the order. (pattern: &lt;code&gt;^op-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="payment_option" /></td>
    <td><code>string</code></td>
    <td>The payment option for the order. (ALL_UPFRONT, NO_UPFRONT, PARTIAL_UPFRONT)</td>
</tr>
<tr>
    <td><CopyableCode code="payment_term" /></td>
    <td><code>string</code></td>
    <td>The payment term. (THREE_YEARS, ONE_YEAR, FIVE_YEARS)</td>
</tr>
<tr>
    <td><CopyableCode code="quote_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the quote associated with the order. (pattern: &lt;code&gt;^(arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:quote/)?oq-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="quote_option_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the quote option associated with the order. (pattern: &lt;code&gt;^oqo-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the order. PREPARING - Order is received and being prepared. IN_PROGRESS - Order is either being built or shipped. To get more details, see the line item status. DELIVERED - Order was delivered to the Outpost site. COMPLETED - Order is complete. CANCELLED - Order is cancelled. ERROR - Customer should contact support. The following status are deprecated: RECEIVED, PENDING, PROCESSING, INSTALLING, and FULFILLED. (RECEIVED, PENDING, PROCESSING, INSTALLING, FULFILLED, CANCELLED, PREPARING, IN_PROGRESS, DELIVERED, COMPLETED, ERROR)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_orders">

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
    <td><CopyableCode code="line_item_counts_by_status" /></td>
    <td><code>object</code></td>
    <td>The status of all line items in the order.</td>
</tr>
<tr>
    <td><CopyableCode code="order_fulfilled_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The fulfilment date for the order.</td>
</tr>
<tr>
    <td><CopyableCode code="order_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the order. (pattern: &lt;code&gt;oo-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="order_submission_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The submission date for the order.</td>
</tr>
<tr>
    <td><CopyableCode code="order_type" /></td>
    <td><code>string</code></td>
    <td>The type of order. (OUTPOST, REPLACEMENT)</td>
</tr>
<tr>
    <td><CopyableCode code="outpost_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Outpost. (pattern: &lt;code&gt;^op-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the order. PREPARING - Order is received and is being prepared. IN_PROGRESS - Order is either being built, shipped, or installed. For more information, see the LineItem status. COMPLETED - Order is complete. CANCELLED - Order is cancelled. ERROR - Customer should contact support. The following statuses are deprecated: RECEIVED, PENDING, PROCESSING, INSTALLING, and FULFILLED. (RECEIVED, PENDING, PROCESSING, INSTALLING, FULFILLED, CANCELLED, PREPARING, IN_PROGRESS, DELIVERED, COMPLETED, ERROR)</td>
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
    <td><a href="#get_order"><CopyableCode code="get_order" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-order_id"><code>order_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified order.</td>
</tr>
<tr>
    <td><a href="#list_orders"><CopyableCode code="list_orders" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-OutpostIdentifierFilter"><code>OutpostIdentifierFilter</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Lists the Outpost orders for your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_order"><CopyableCode code="create_order" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OutpostIdentifier"><code>OutpostIdentifier</code></a>, <a href="#parameter-PaymentOption"><code>PaymentOption</code></a></td>
    <td></td>
    <td>Creates an order for an Outpost.</td>
</tr>
<tr>
    <td><a href="#cancel_order"><CopyableCode code="cancel_order" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-order_id"><code>order_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels the specified order for an Outpost.</td>
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
<tr id="parameter-order_id">
    <td><CopyableCode code="order_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the order.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-OutpostIdentifierFilter">
    <td><CopyableCode code="OutpostIdentifierFilter" /></td>
    <td><code>string</code></td>
    <td>The ID or the Amazon Resource Name (ARN) of the Outpost.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_order"
    values={[
        { label: 'get_order', value: 'get_order' },
        { label: 'list_orders', value: 'list_orders' }
    ]}
>
<TabItem value="get_order">

Gets information about the specified order.

```sql
SELECT
line_items,
order_fulfilled_date,
order_id,
order_submission_date,
order_type,
outpost_id,
payment_option,
payment_term,
quote_identifier,
quote_option_identifier,
status
FROM aws.outposts.orders
WHERE order_id = '{{ order_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_orders">

Lists the Outpost orders for your Amazon Web Services account.

```sql
SELECT
line_item_counts_by_status,
order_fulfilled_date,
order_id,
order_submission_date,
order_type,
outpost_id,
status
FROM aws.outposts.orders
WHERE region = '{{ region }}' -- required
AND OutpostIdentifierFilter = '{{ OutpostIdentifierFilter }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_order"
    values={[
        { label: 'create_order', value: 'create_order' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_order">

Creates an order for an Outpost.

```sql
INSERT INTO aws.outposts.orders (
OutpostIdentifier,
QuoteIdentifier,
QuoteOptionIdentifier,
LineItems,
PaymentOption,
PaymentTerm,
region
)
SELECT 
'{{ OutpostIdentifier }}' /* required */,
'{{ QuoteIdentifier }}',
'{{ QuoteOptionIdentifier }}',
'{{ LineItems }}',
'{{ PaymentOption }}' /* required */,
'{{ PaymentTerm }}',
'{{ region }}'
RETURNING
order
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: orders
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the orders resource.
    - name: OutpostIdentifier
      value: "{{ OutpostIdentifier }}"
    - name: QuoteIdentifier
      value: "{{ QuoteIdentifier }}"
    - name: QuoteOptionIdentifier
      value: "{{ QuoteOptionIdentifier }}"
    - name: LineItems
      value:
        - CatalogItemId: "{{ CatalogItemId }}"
          Quantity: {{ Quantity }}
    - name: PaymentOption
      value: "{{ PaymentOption }}"
      valid_values: ['ALL_UPFRONT', 'NO_UPFRONT', 'PARTIAL_UPFRONT']
    - name: PaymentTerm
      value: "{{ PaymentTerm }}"
      valid_values: ['THREE_YEARS', 'ONE_YEAR', 'FIVE_YEARS']
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_order"
    values={[
        { label: 'cancel_order', value: 'cancel_order' }
    ]}
>
<TabItem value="cancel_order">

Cancels the specified order for an Outpost.

```sql
EXEC aws.outposts.orders.cancel_order 
@order_id='{{ order_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
