--- 
title: agreement_charges
hide_title: false
hide_table_of_contents: false
keywords:
  - agreement_charges
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

Creates, updates, deletes, gets or lists an <code>agreement_charges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agreement_charges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplace_agreement.agreement_charges" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_agreement_charges"
    values={[
        { label: 'list_agreement_charges', value: 'list_agreement_charges' }
    ]}
>
<TabItem value="list_agreement_charges">

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
    <td>The unique identifier of the charge. (pattern: &lt;code&gt;&#91;A-Za-z0-9_/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agreement_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agreement that resulted in this charge. (pattern: &lt;code&gt;&#91;A-Za-z0-9_/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agreement_type" /></td>
    <td><code>string</code></td>
    <td>The type of agreement that resulted in this charge (for example, PurchaseAgreement). (pattern: &lt;code&gt;&#91;A-Za-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="amount" /></td>
    <td><code>string</code></td>
    <td>The amount of the charge. (pattern: &lt;code&gt;(.)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="currency_code" /></td>
    <td><code>string</code></td>
    <td>The currency code for the charge amount. (pattern: &lt;code&gt;&#91;A-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="purchase_order_reference" /></td>
    <td><code>string</code></td>
    <td>The purchase order reference associated with the charge, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>integer (int64)</code></td>
    <td>The revision number of the charge.</td>
</tr>
<tr>
    <td><CopyableCode code="time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the charge will be incurred. This is available only when the charge date is known.</td>
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
    <td><a href="#list_agreement_charges"><CopyableCode code="list_agreement_charges" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Allows acceptors to view charges and purchase orders that are associated with an agreement. The response includes details about all charges regardless of whether a purchase order is linked to each charge.</td>
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
    defaultValue="list_agreement_charges"
    values={[
        { label: 'list_agreement_charges', value: 'list_agreement_charges' }
    ]}
>
<TabItem value="list_agreement_charges">

Allows acceptors to view charges and purchase orders that are associated with an agreement. The response includes details about all charges regardless of whether a purchase order is linked to each charge.

```sql
SELECT
id,
agreement_id,
agreement_type,
amount,
currency_code,
purchase_order_reference,
revision,
time
FROM aws.marketplace_agreement.agreement_charges
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
