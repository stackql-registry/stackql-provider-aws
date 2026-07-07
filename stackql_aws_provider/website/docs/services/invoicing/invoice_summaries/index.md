--- 
title: invoice_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - invoice_summaries
  - invoicing
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

Creates, updates, deletes, gets or lists an <code>invoice_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="invoice_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.invoicing.invoice_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_invoice_summaries"
    values={[
        { label: 'list_invoice_summaries', value: 'list_invoice_summaries' }
    ]}
>
<TabItem value="list_invoice_summaries">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="BaseCurrencyAmount" /></td>
    <td><code>object</code></td>
    <td>The summary with the product and service currency.</td>
</tr>
<tr>
    <td><CopyableCode code="BillSourceAccounts" /></td>
    <td><code>array</code></td>
    <td>The list of Amazon Web Services account IDs that are the bill source of the invoice. Currently, only a single bill source account is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="BillSourceAccountsTotalCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of accounts that are the bill source of the invoice.</td>
</tr>
<tr>
    <td><CopyableCode code="BillType" /></td>
    <td><code>string</code></td>
    <td>The type of the bill. (ANNIVERSARY, PURCHASE, REFUND)</td>
</tr>
<tr>
    <td><CopyableCode code="BillingPeriod" /></td>
    <td><code>object</code></td>
    <td>The billing period of the invoice-related document.</td>
</tr>
<tr>
    <td><CopyableCode code="CommercialInvoiceId" /></td>
    <td><code>string</code></td>
    <td>The commercial invoice ID. This is only applicable for tax invoices and identifies the associated commercial invoice. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DueDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The invoice due date.</td>
</tr>
<tr>
    <td><CopyableCode code="EinvoiceDeliveryStatus" /></td>
    <td><code>string</code></td>
    <td>The e-invoice delivery status. (DELIVERED, NOT_DELIVERED)</td>
</tr>
<tr>
    <td><CopyableCode code="Entity" /></td>
    <td><code>object</code></td>
    <td>The organization name providing Amazon Web Services services.</td>
</tr>
<tr>
    <td><CopyableCode code="InvoiceFrequency" /></td>
    <td><code>string</code></td>
    <td>The frequency of the invoice. (ONE_TIME, RECURRING)</td>
</tr>
<tr>
    <td><CopyableCode code="InvoiceId" /></td>
    <td><code>string</code></td>
    <td>The invoice ID. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InvoiceType" /></td>
    <td><code>string</code></td>
    <td>The type of invoice. (INVOICE, CREDIT_MEMO, PAYMENT_RECEIPT)</td>
</tr>
<tr>
    <td><CopyableCode code="IssuedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The issued date of the invoice.</td>
</tr>
<tr>
    <td><CopyableCode code="OriginalInvoiceId" /></td>
    <td><code>string</code></td>
    <td>The initial or original invoice ID. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PaymentCurrencyAmount" /></td>
    <td><code>object</code></td>
    <td>The summary with the customer configured currency.</td>
</tr>
<tr>
    <td><CopyableCode code="PurchaseOrderNumber" /></td>
    <td><code>string</code></td>
    <td>The purchase order number associated to the invoice. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ReceiverRole" /></td>
    <td><code>string</code></td>
    <td>The role of the invoice receiver. (SELLER, RESELLER, BUYER)</td>
</tr>
<tr>
    <td><CopyableCode code="TaxAuthorityStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of an invoice as reported to the tax authority. This captures scenarios where an invoice may be cancelled after issuance. (ISSUED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="TaxCurrencyAmount" /></td>
    <td><code>object</code></td>
    <td>The summary with the tax currency.</td>
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
    <td><a href="#list_invoice_summaries"><CopyableCode code="list_invoice_summaries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves your invoice details programmatically, without line item details.</td>
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
    defaultValue="list_invoice_summaries"
    values={[
        { label: 'list_invoice_summaries', value: 'list_invoice_summaries' }
    ]}
>
<TabItem value="list_invoice_summaries">

Retrieves your invoice details programmatically, without line item details.

```sql
SELECT
AccountId,
BaseCurrencyAmount,
BillSourceAccounts,
BillSourceAccountsTotalCount,
BillType,
BillingPeriod,
CommercialInvoiceId,
DueDate,
EinvoiceDeliveryStatus,
Entity,
InvoiceFrequency,
InvoiceId,
InvoiceType,
IssuedDate,
OriginalInvoiceId,
PaymentCurrencyAmount,
PurchaseOrderNumber,
ReceiverRole,
TaxAuthorityStatus,
TaxCurrencyAmount
FROM aws.invoicing.invoice_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
