--- 
title: enterprise_support_linked_account_charges
hide_title: false
hide_table_of_contents: false
keywords:
  - enterprise_support_linked_account_charges
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

Creates, updates, deletes, gets or lists an <code>enterprise_support_linked_account_charges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="enterprise_support_linked_account_charges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.billing.enterprise_support_linked_account_charges" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_enterprise_support_linked_account_charges"
    values={[
        { label: 'list_enterprise_support_linked_account_charges', value: 'list_enterprise_support_linked_account_charges' }
    ]}
>
<TabItem value="list_enterprise_support_linked_account_charges">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The linked account ID. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="account_type" /></td>
    <td><code>string</code></td>
    <td>The type of account.</td>
</tr>
<tr>
    <td><CopyableCode code="billable_seconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of billable seconds in the billing period based on when the account was subscribed to Enterprise Support.</td>
</tr>
<tr>
    <td><CopyableCode code="linked_time_periods" /></td>
    <td><code>array</code></td>
    <td>The time periods during which this account was linked.</td>
</tr>
<tr>
    <td><CopyableCode code="payer_account_id" /></td>
    <td><code>string</code></td>
    <td>The payer account ID that is authorized to view Enterprise Support data for all accounts in its Support profile. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="prorated_total_support_eligible_spend" /></td>
    <td><code>string</code></td>
    <td>The prorated total support-eligible spend based on when the account was subscribed to Enterprise Support.</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_time_periods" /></td>
    <td><code>array</code></td>
    <td>The subscription time periods for this account.</td>
</tr>
<tr>
    <td><CopyableCode code="support_eligible_spend_by_service" /></td>
    <td><code>array</code></td>
    <td>The support-eligible spend broken down by service.</td>
</tr>
<tr>
    <td><CopyableCode code="total_seconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of seconds in the billing period.</td>
</tr>
<tr>
    <td><CopyableCode code="total_support_eligible_reserved_instance_spend" /></td>
    <td><code>string</code></td>
    <td>The total support-eligible Reserved Instance spend for this account.</td>
</tr>
<tr>
    <td><CopyableCode code="total_support_eligible_savings_plan_spend" /></td>
    <td><code>string</code></td>
    <td>The total support-eligible Savings Plan spend for this account.</td>
</tr>
<tr>
    <td><CopyableCode code="total_support_eligible_spend" /></td>
    <td><code>string</code></td>
    <td>The total support-eligible spend for this account.</td>
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
    <td><a href="#list_enterprise_support_linked_account_charges"><CopyableCode code="list_enterprise_support_linked_account_charges" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns Support-eligible spend broken down at linked account level.</td>
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
    defaultValue="list_enterprise_support_linked_account_charges"
    values={[
        { label: 'list_enterprise_support_linked_account_charges', value: 'list_enterprise_support_linked_account_charges' }
    ]}
>
<TabItem value="list_enterprise_support_linked_account_charges">

Returns Support-eligible spend broken down at linked account level.

```sql
SELECT
account_id,
account_type,
billable_seconds,
linked_time_periods,
payer_account_id,
prorated_total_support_eligible_spend,
subscription_time_periods,
support_eligible_spend_by_service,
total_seconds,
total_support_eligible_reserved_instance_spend,
total_support_eligible_savings_plan_spend,
total_support_eligible_spend
FROM aws.billing.enterprise_support_linked_account_charges
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
