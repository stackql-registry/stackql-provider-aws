--- 
title: bonus_payments
hide_title: false
hide_table_of_contents: false
keywords:
  - bonus_payments
  - mturk
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

Creates, updates, deletes, gets or lists a <code>bonus_payments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bonus_payments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mturk.bonus_payments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_bonus_payments"
    values={[
        { label: 'list_bonus_payments', value: 'list_bonus_payments' }
    ]}
>
<TabItem value="list_bonus_payments">

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
    <td><CopyableCode code="AssignmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the assignment associated with this bonus payment. (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="BonusAmount" /></td>
    <td><code>string</code></td>
    <td>A string representing a currency amount. (pattern: &lt;code&gt;^&#91;0-9&#93;+(\.)?&#91;0-9&#93;&#123;0,2&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GrantTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the bonus was granted.</td>
</tr>
<tr>
    <td><CopyableCode code="Reason" /></td>
    <td><code>string</code></td>
    <td>The Reason text given when the bonus was granted, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="WorkerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Worker to whom the bonus was paid. (pattern: &lt;code&gt;^A&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#list_bonus_payments"><CopyableCode code="list_bonus_payments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The ListBonusPayments operation retrieves the amounts of bonuses you have paid to Workers for a given HIT or assignment.</td>
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
    defaultValue="list_bonus_payments"
    values={[
        { label: 'list_bonus_payments', value: 'list_bonus_payments' }
    ]}
>
<TabItem value="list_bonus_payments">

The ListBonusPayments operation retrieves the amounts of bonuses you have paid to Workers for a given HIT or assignment.

```sql
SELECT
AssignmentId,
BonusAmount,
GrantTime,
Reason,
WorkerId
FROM aws.mturk.bonus_payments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
