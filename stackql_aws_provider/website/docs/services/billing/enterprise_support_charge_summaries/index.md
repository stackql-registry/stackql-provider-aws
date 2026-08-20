--- 
title: enterprise_support_charge_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - enterprise_support_charge_summaries
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

Creates, updates, deletes, gets or lists an <code>enterprise_support_charge_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="enterprise_support_charge_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.billing.enterprise_support_charge_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_enterprise_support_charge_summary"
    values={[
        { label: 'get_enterprise_support_charge_summary', value: 'get_enterprise_support_charge_summary' }
    ]}
>
<TabItem value="get_enterprise_support_charge_summary">

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
    <td><CopyableCode code="bill_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the bill was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="billing_month" /></td>
    <td><code>string</code></td>
    <td>The billing month in YYYY-MM format. This must be a month in the past. (pattern: &lt;code&gt;\d&#123;4&#125;-(0&#91;1-9&#93;|1&#91;0-2&#93;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="billing_period_end_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end date of the billing period.</td>
</tr>
<tr>
    <td><CopyableCode code="billing_period_start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date of the billing period.</td>
</tr>
<tr>
    <td><CopyableCode code="is_estimated" /></td>
    <td><code>boolean</code></td>
    <td>When true, the Support charge amount is estimated. When false, the Support charge amount is finalized.</td>
</tr>
<tr>
    <td><CopyableCode code="payer_account_id" /></td>
    <td><code>string</code></td>
    <td>The payer account ID that is authorized to view Enterprise Support data for all accounts in its Support profile. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="support_charge" /></td>
    <td><code>string</code></td>
    <td>The Support charge amount for the account.</td>
</tr>
<tr>
    <td><CopyableCode code="support_charge_percentage" /></td>
    <td><code>string</code></td>
    <td>The percentage applied to the total Support-eligible spend to calculate the total Support charge across all accounts in the Support profile.</td>
</tr>
<tr>
    <td><CopyableCode code="support_discount" /></td>
    <td><code>string</code></td>
    <td>The support discount amount.</td>
</tr>
<tr>
    <td><CopyableCode code="support_effective_pricing_plan" /></td>
    <td><code>object</code></td>
    <td>The effective pricing plan used for the support charge calculation.</td>
</tr>
<tr>
    <td><CopyableCode code="total_support_charge" /></td>
    <td><code>string</code></td>
    <td>The total Support charge amount for all accounts in the Support profile.</td>
</tr>
<tr>
    <td><CopyableCode code="total_support_eligible_reserved_instance_spend" /></td>
    <td><code>string</code></td>
    <td>The total Support-eligible Reserved Instance spend from all accounts in the Support profile.</td>
</tr>
<tr>
    <td><CopyableCode code="total_support_eligible_savings_plan_spend" /></td>
    <td><code>string</code></td>
    <td>The total Support-eligible Savings Plan spend from all accounts in the Support profile.</td>
</tr>
<tr>
    <td><CopyableCode code="total_support_eligible_spend" /></td>
    <td><code>string</code></td>
    <td>The total Support-eligible Spend from all accounts in the Support profile. This includes eligible spend from usage of Amazon Web Services, Reserved Instances, and Savings Plans.</td>
</tr>
<tr>
    <td><CopyableCode code="total_support_eligible_usage_spend" /></td>
    <td><code>string</code></td>
    <td>The total Support-eligible spend from usage of Amazon Web Services from all accounts in the Support profile.</td>
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
    <td><a href="#get_enterprise_support_charge_summary"><CopyableCode code="get_enterprise_support_charge_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a summary of Enterprise Support data aggregated across all accounts in the Enterprise Support profile.</td>
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
    defaultValue="get_enterprise_support_charge_summary"
    values={[
        { label: 'get_enterprise_support_charge_summary', value: 'get_enterprise_support_charge_summary' }
    ]}
>
<TabItem value="get_enterprise_support_charge_summary">

Returns a summary of Enterprise Support data aggregated across all accounts in the Enterprise Support profile.

```sql
SELECT
bill_date,
billing_month,
billing_period_end_date,
billing_period_start_date,
is_estimated,
payer_account_id,
support_charge,
support_charge_percentage,
support_discount,
support_effective_pricing_plan,
total_support_charge,
total_support_eligible_reserved_instance_spend,
total_support_eligible_savings_plan_spend,
total_support_eligible_spend,
total_support_eligible_usage_spend
FROM aws.billing.enterprise_support_charge_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
