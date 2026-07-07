--- 
title: offer_terms
hide_title: false
hide_table_of_contents: false
keywords:
  - offer_terms
  - marketplace_discovery
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

Creates, updates, deletes, gets or lists an <code>offer_terms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="offer_terms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplace_discovery.offer_terms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_offer_terms"
    values={[
        { label: 'get_offer_terms', value: 'get_offer_terms' }
    ]}
>
<TabItem value="get_offer_terms">

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
    <td><CopyableCode code="byolPricingTerm" /></td>
    <td><code>object</code></td>
    <td>Defines a Bring Your Own License (BYOL) pricing term, where buyers use their existing license for the product.</td>
</tr>
<tr>
    <td><CopyableCode code="configurableUpfrontPricingTerm" /></td>
    <td><code>object</code></td>
    <td>Defines a configurable upfront pricing term with selectable rate cards, where buyers choose from predefined pricing configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="fixedUpfrontPricingTerm" /></td>
    <td><code>object</code></td>
    <td>Defines a fixed upfront pricing term with a pre-paid amount and granted entitlements.</td>
</tr>
<tr>
    <td><CopyableCode code="freeTrialPricingTerm" /></td>
    <td><code>object</code></td>
    <td>Defines a free trial pricing term that enables customers to try the product before purchasing.</td>
</tr>
<tr>
    <td><CopyableCode code="legalTerm" /></td>
    <td><code>object</code></td>
    <td>Defines a legal term containing documents proposed to buyers, such as EULAs and data subscription agreements.</td>
</tr>
<tr>
    <td><CopyableCode code="paymentScheduleTerm" /></td>
    <td><code>object</code></td>
    <td>Defines a payment schedule term with installment payments at specified dates.</td>
</tr>
<tr>
    <td><CopyableCode code="recurringPaymentTerm" /></td>
    <td><code>object</code></td>
    <td>Defines a recurring payment term with fixed charges at regular billing intervals.</td>
</tr>
<tr>
    <td><CopyableCode code="renewalTerm" /></td>
    <td><code>object</code></td>
    <td>Defines a renewal term that enables automatic agreement renewal.</td>
</tr>
<tr>
    <td><CopyableCode code="supportTerm" /></td>
    <td><code>object</code></td>
    <td>Defines a support term that includes the refund policy for the offer.</td>
</tr>
<tr>
    <td><CopyableCode code="usageBasedPricingTerm" /></td>
    <td><code>object</code></td>
    <td>Defines a usage-based pricing term (typically pay-as-you-go), where buyers are charged based on product usage.</td>
</tr>
<tr>
    <td><CopyableCode code="validityTerm" /></td>
    <td><code>object</code></td>
    <td>Defines a validity term that specifies the duration or date range of an agreement.</td>
</tr>
<tr>
    <td><CopyableCode code="variablePaymentTerm" /></td>
    <td><code>object</code></td>
    <td>Defines a variable payment term with a maximum total charge amount.</td>
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
    <td><a href="#get_offer_terms"><CopyableCode code="get_offer_terms" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the terms attached to an offer, such as pricing terms (usage-based, contract, BYOL, free trial), legal terms, payment schedules, validity terms, support terms, and renewal terms.</td>
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
    defaultValue="get_offer_terms"
    values={[
        { label: 'get_offer_terms', value: 'get_offer_terms' }
    ]}
>
<TabItem value="get_offer_terms">

Returns the terms attached to an offer, such as pricing terms (usage-based, contract, BYOL, free trial), legal terms, payment schedules, validity terms, support terms, and renewal terms.

```sql
SELECT
byolPricingTerm,
configurableUpfrontPricingTerm,
fixedUpfrontPricingTerm,
freeTrialPricingTerm,
legalTerm,
paymentScheduleTerm,
recurringPaymentTerm,
renewalTerm,
supportTerm,
usageBasedPricingTerm,
validityTerm,
variablePaymentTerm
FROM aws.marketplace_discovery.offer_terms
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
