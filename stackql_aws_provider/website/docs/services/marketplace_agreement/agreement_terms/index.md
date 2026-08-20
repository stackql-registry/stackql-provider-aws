--- 
title: agreement_terms
hide_title: false
hide_table_of_contents: false
keywords:
  - agreement_terms
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

Creates, updates, deletes, gets or lists an <code>agreement_terms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agreement_terms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplace_agreement.agreement_terms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_agreement_terms"
    values={[
        { label: 'get_agreement_terms', value: 'get_agreement_terms' }
    ]}
>
<TabItem value="get_agreement_terms">

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
    <td><CopyableCode code="byol_pricing_term" /></td>
    <td><code>object</code></td>
    <td>Enables you and your customers to move your existing agreements to AWS Marketplace. The customer won't be charged for product usage in AWS Marketplace because they already paid for the product outside of AWS Marketplace.</td>
</tr>
<tr>
    <td><CopyableCode code="configurable_upfront_pricing_term" /></td>
    <td><code>object</code></td>
    <td>Defines a prepaid payment model that allows buyers to configure the entitlements they want to purchase and the duration.</td>
</tr>
<tr>
    <td><CopyableCode code="fixed_upfront_pricing_term" /></td>
    <td><code>object</code></td>
    <td>Defines a pre-paid pricing model where the customers are charged a fixed upfront amount.</td>
</tr>
<tr>
    <td><CopyableCode code="free_trial_pricing_term" /></td>
    <td><code>object</code></td>
    <td>Defines a short-term free pricing model where the buyers aren’t charged anything within a specified limit.</td>
</tr>
<tr>
    <td><CopyableCode code="legal_term" /></td>
    <td><code>object</code></td>
    <td>Defines the list of text agreements proposed to the acceptors. An example is the end user license agreement (EULA).</td>
</tr>
<tr>
    <td><CopyableCode code="net_payment_term" /></td>
    <td><code>object</code></td>
    <td>Defines the net payment due period for the agreement, specifying when payment is due after an invoice is issued.</td>
</tr>
<tr>
    <td><CopyableCode code="payment_schedule_term" /></td>
    <td><code>object</code></td>
    <td>Defines an installment-based pricing model where customers are charged a fixed price on different dates during the agreement validity period. This is used most commonly for flexible payment schedule pricing.</td>
</tr>
<tr>
    <td><CopyableCode code="recurring_payment_term" /></td>
    <td><code>object</code></td>
    <td>Defines a pricing model where customers are charged a fixed recurring price at the end of each billing period.</td>
</tr>
<tr>
    <td><CopyableCode code="renewal_term" /></td>
    <td><code>object</code></td>
    <td>Defines that on graceful expiration of the agreement (when the agreement ends on its pre-defined end date), a new agreement will be created using the accepted terms on the existing agreement. In other words, the agreement will be renewed. Presence of RenewalTerm in the offer document means that auto-renewal is allowed. Buyers will have the option to accept or decline auto-renewal at the offer acceptance/agreement creation. Buyers can also change this flag from True to False or False to True at anytime during the agreement's lifecycle.</td>
</tr>
<tr>
    <td><CopyableCode code="support_term" /></td>
    <td><code>object</code></td>
    <td>Defines the customer support available for the acceptors when they purchase the software.</td>
</tr>
<tr>
    <td><CopyableCode code="usage_based_pricing_term" /></td>
    <td><code>object</code></td>
    <td>Defines a usage-based pricing model (typically, pay-as-you-go pricing), where the customers are charged based on product usage.</td>
</tr>
<tr>
    <td><CopyableCode code="validity_term" /></td>
    <td><code>object</code></td>
    <td>Defines the conditions that will keep an agreement created from this offer valid.</td>
</tr>
<tr>
    <td><CopyableCode code="variable_payment_term" /></td>
    <td><code>object</code></td>
    <td>Defines a payment model where sellers can submit variable payment requests up to a maximum charge amount, with configurable approval strategies and expiration timelines.</td>
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
    <td><a href="#get_agreement_terms"><CopyableCode code="get_agreement_terms" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Obtains details about the terms in an agreement that you participated in as proposer or acceptor. The details include: TermType – The type of term, such as LegalTerm, RenewalTerm, or ConfigurableUpfrontPricingTerm. TermID – The ID of the particular term, which is common between offer and agreement. TermPayload – The key information contained in the term, such as the EULA for LegalTerm or pricing and dimensions for various pricing terms, such as ConfigurableUpfrontPricingTerm or UsageBasedPricingTerm. Configuration – The buyer/acceptor's selection at the time of agreement creation, such as the number of units purchased for a dimension or setting the EnableAutoRenew flag.</td>
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
    defaultValue="get_agreement_terms"
    values={[
        { label: 'get_agreement_terms', value: 'get_agreement_terms' }
    ]}
>
<TabItem value="get_agreement_terms">

Obtains details about the terms in an agreement that you participated in as proposer or acceptor. The details include: TermType – The type of term, such as LegalTerm, RenewalTerm, or ConfigurableUpfrontPricingTerm. TermID – The ID of the particular term, which is common between offer and agreement. TermPayload – The key information contained in the term, such as the EULA for LegalTerm or pricing and dimensions for various pricing terms, such as ConfigurableUpfrontPricingTerm or UsageBasedPricingTerm. Configuration – The buyer/acceptor's selection at the time of agreement creation, such as the number of units purchased for a dimension or setting the EnableAutoRenew flag.

```sql
SELECT
byol_pricing_term,
configurable_upfront_pricing_term,
fixed_upfront_pricing_term,
free_trial_pricing_term,
legal_term,
net_payment_term,
payment_schedule_term,
recurring_payment_term,
renewal_term,
support_term,
usage_based_pricing_term,
validity_term,
variable_payment_term
FROM aws.marketplace_agreement.agreement_terms
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
