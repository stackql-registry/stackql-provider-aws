--- 
title: invoice_pdfs
hide_title: false
hide_table_of_contents: false
keywords:
  - invoice_pdfs
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

Creates, updates, deletes, gets or lists an <code>invoice_pdfs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="invoice_pdfs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.invoicing.invoice_pdfs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_invoice_pdf"
    values={[
        { label: 'get_invoice_pdf', value: 'get_invoice_pdf' }
    ]}
>
<TabItem value="get_invoice_pdf">

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
    <td><CopyableCode code="document_url" /></td>
    <td><code>string</code></td>
    <td>The pre-signed URL to download the invoice document. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="document_url_expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The pre-signed URL expiration date of the invoice document.</td>
</tr>
<tr>
    <td><CopyableCode code="invoice_id" /></td>
    <td><code>string</code></td>
    <td>Your unique invoice ID. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="supplemental_documents" /></td>
    <td><code>array</code></td>
    <td>List of supplemental documents associated with the invoice.</td>
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
    <td><a href="#get_invoice_pdf"><CopyableCode code="get_invoice_pdf" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a URL to download the invoice document and supplemental documents associated with an invoice. The URLs are pre-signed and have expiration time. For special cases like Brazil, where Amazon Web Services generated invoice identifiers and government provided identifiers do not match, use the Amazon Web Services generated invoice identifier when making API requests. To grant IAM permission to use this operation, the caller needs the invoicing:GetInvoicePDF policy action.</td>
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
    defaultValue="get_invoice_pdf"
    values={[
        { label: 'get_invoice_pdf', value: 'get_invoice_pdf' }
    ]}
>
<TabItem value="get_invoice_pdf">

Returns a URL to download the invoice document and supplemental documents associated with an invoice. The URLs are pre-signed and have expiration time. For special cases like Brazil, where Amazon Web Services generated invoice identifiers and government provided identifiers do not match, use the Amazon Web Services generated invoice identifier when making API requests. To grant IAM permission to use this operation, the caller needs the invoicing:GetInvoicePDF policy action.

```sql
SELECT
document_url,
document_url_expiration_date,
invoice_id,
supplemental_documents
FROM aws.invoicing.invoice_pdfs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
