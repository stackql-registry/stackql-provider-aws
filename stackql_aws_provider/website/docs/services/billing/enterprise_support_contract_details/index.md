--- 
title: enterprise_support_contract_details
hide_title: false
hide_table_of_contents: false
keywords:
  - enterprise_support_contract_details
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

Creates, updates, deletes, gets or lists an <code>enterprise_support_contract_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="enterprise_support_contract_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.billing.enterprise_support_contract_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_enterprise_support_contract_details"
    values={[
        { label: 'get_enterprise_support_contract_details', value: 'get_enterprise_support_contract_details' }
    ]}
>
<TabItem value="get_enterprise_support_contract_details">

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
    <td><CopyableCode code="additional_support_charge" /></td>
    <td><code>array</code></td>
    <td>Any Additional support charges applied to the contract.</td>
</tr>
<tr>
    <td><CopyableCode code="additional_support_eligible_usage_spend" /></td>
    <td><code>array</code></td>
    <td>Any Additional support-eligible usage spend charges.</td>
</tr>
<tr>
    <td><CopyableCode code="charged_payer_account_ids" /></td>
    <td><code>array</code></td>
    <td>The list of payer accounts and their charge allocation percentages.</td>
</tr>
<tr>
    <td><CopyableCode code="contract_payer_account_ids" /></td>
    <td><code>array</code></td>
    <td>The list of accounts covered by the Enterprise Support contract.</td>
</tr>
<tr>
    <td><CopyableCode code="is_contract_active" /></td>
    <td><code>boolean</code></td>
    <td>When true, the Enterprise Support contract is active. When false, the Enterprise Support Contract is inactive.</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_plans" /></td>
    <td><code>array</code></td>
    <td>The pricing plans associated with this Enterprise Support contract.</td>
</tr>
<tr>
    <td><CopyableCode code="support_allocation_method" /></td>
    <td><code>string</code></td>
    <td>The method used to distribute the total Support charge amount across each account in the Support profile. Valid values: Proportional, Fixed_Percentage. Proportional means support charges are distributed to each account in proportion to its eligible Spend. Fixed_Percentage means support charges are distributed across accounts according to pre-configured percentages from the contract.</td>
</tr>
<tr>
    <td><CopyableCode code="support_prorate_start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date for accounts subscribed or unsubscribed to Support billing during the billing month.</td>
</tr>
<tr>
    <td><CopyableCode code="support_reserved_instance_amortization_start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>When supportReservedInstanceTreatmentMethod = AmortizedCustom, only amortized fees for Reserved Instances purchased on or after this date are included in the calculation. This field is Null for all other treatment methods.</td>
</tr>
<tr>
    <td><CopyableCode code="support_reserved_instance_treatment_method" /></td>
    <td><code>string</code></td>
    <td>The method used to include Reserved Instance (RI) fees in the Enterprise Support charge calculation. Valid values: None (RI fees excluded from Support-eligible spend), Upfront (full upfront RI fees included in month of purchase), Amortized (RI fees spread over commitment term for RIs purchased on or after Support subscription start date), AmortizedCustom (same as Amortized but only for RIs purchased on or after a specified custom start date), AmortizedAll (RI fees amortized for all active RIs including those purchased before Support subscription started).</td>
</tr>
<tr>
    <td><CopyableCode code="support_savings_plans_amortization_start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>This is applicable when supportSavingsPlansTreatmentMethod = Amortized and is Null for all other methods. It shows the start date from which Savings Plan fees are included in Support Eligible Spend.</td>
</tr>
<tr>
    <td><CopyableCode code="support_savings_plans_treatment_method" /></td>
    <td><code>string</code></td>
    <td>The method used to include Savings Plans fees in Enterprise Support charge calculations. Valid values: None (Savings Plan fees excluded from Support-eligible spend), Upfront (full upfront Savings Plan fees included in month of purchase), Amortized (Savings Plan fees spread over commitment term for Savings Plans purchased on or after Support subscription start date), AmortizedCustom (same as Amortized but only for Savings Plans purchased on or after a specified custom start date), AmortizedAll (Savings Plan fees amortized for all active Savings Plans including those purchased before Support subscription started).</td>
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
    <td><a href="#get_enterprise_support_contract_details"><CopyableCode code="get_enterprise_support_contract_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns Enterprise Support contract details.</td>
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
    defaultValue="get_enterprise_support_contract_details"
    values={[
        { label: 'get_enterprise_support_contract_details', value: 'get_enterprise_support_contract_details' }
    ]}
>
<TabItem value="get_enterprise_support_contract_details">

Returns Enterprise Support contract details.

```sql
SELECT
additional_support_charge,
additional_support_eligible_usage_spend,
charged_payer_account_ids,
contract_payer_account_ids,
is_contract_active,
pricing_plans,
support_allocation_method,
support_prorate_start_date,
support_reserved_instance_amortization_start_date,
support_reserved_instance_treatment_method,
support_savings_plans_amortization_start_date,
support_savings_plans_treatment_method
FROM aws.billing.enterprise_support_contract_details
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
