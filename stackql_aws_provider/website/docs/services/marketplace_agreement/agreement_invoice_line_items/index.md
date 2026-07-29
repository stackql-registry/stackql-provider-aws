--- 
title: agreement_invoice_line_items
hide_title: false
hide_table_of_contents: false
keywords:
  - agreement_invoice_line_items
  - marketplace_agreement
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

Creates, updates, deletes, gets or lists an <code>agreement_invoice_line_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agreement_invoice_line_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplace_agreement.agreement_invoice_line_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_agreement_invoice_line_items"
    values={[
        { label: 'list_agreement_invoice_line_items', value: 'list_agreement_invoice_line_items' }
    ]}
>
<TabItem value="list_agreement_invoice_line_items">

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
    <td><CopyableCode code="agreement_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agreement. (pattern: &lt;code&gt;&#91;A-Za-z0-9_/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="invoice_billing_period" /></td>
    <td><code>object</code></td>
    <td>The billing period associated with this group.</td>
</tr>
<tr>
    <td><CopyableCode code="invoice_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the invoice for this group. (pattern: &lt;code&gt;&#91;A-Za-z0-9_/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="invoice_type" /></td>
    <td><code>string</code></td>
    <td>The type of invoice. Valid values are INVOICE and CREDIT_MEMO. (INVOICE, CREDIT_MEMO)</td>
</tr>
<tr>
    <td><CopyableCode code="invoicing_entity" /></td>
    <td><code>object</code></td>
    <td>The entity that issues the invoice.</td>
</tr>
<tr>
    <td><CopyableCode code="issued_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the invoice containing this group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_currency_amount" /></td>
    <td><code>object</code></td>
    <td>Monetary amounts for this invoice group.</td>
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
    <td><a href="#list_agreement_invoice_line_items"><CopyableCode code="list_agreement_invoice_line_items" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Allows sellers (proposers) to retrieve aggregated billing data from AWS Marketplace agreements using flexible grouping. Supports invoice-level aggregation with filtering by billing period, invoice type, and issued date. The groupBy parameter is required and supports only INVOICE_ID as a value. The agreementId parameter is required.</td>
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
    defaultValue="list_agreement_invoice_line_items"
    values={[
        { label: 'list_agreement_invoice_line_items', value: 'list_agreement_invoice_line_items' }
    ]}
>
<TabItem value="list_agreement_invoice_line_items">

Allows sellers (proposers) to retrieve aggregated billing data from AWS Marketplace agreements using flexible grouping. Supports invoice-level aggregation with filtering by billing period, invoice type, and issued date. The groupBy parameter is required and supports only INVOICE_ID as a value. The agreementId parameter is required.

```sql
SELECT
agreement_id,
invoice_billing_period,
invoice_id,
invoice_type,
invoicing_entity,
issued_time,
pricing_currency_amount
FROM aws.marketplace_agreement.agreement_invoice_line_items
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
