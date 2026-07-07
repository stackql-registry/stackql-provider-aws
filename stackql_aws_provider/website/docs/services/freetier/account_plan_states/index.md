--- 
title: account_plan_states
hide_title: false
hide_table_of_contents: false
keywords:
  - account_plan_states
  - freetier
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

Creates, updates, deletes, gets or lists an <code>account_plan_states</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_plan_states" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.freetier.account_plan_states" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account_plan_state"
    values={[
        { label: 'get_account_plan_state', value: 'get_account_plan_state' }
    ]}
>
<TabItem value="get_account_plan_state">

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
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier that identifies the account. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="accountPlanExpirationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the current account plan expires.</td>
</tr>
<tr>
    <td><CopyableCode code="accountPlanRemainingCredits" /></td>
    <td><code>object</code></td>
    <td>The amount of credits remaining for the account.</td>
</tr>
<tr>
    <td><CopyableCode code="accountPlanStatus" /></td>
    <td><code>string</code></td>
    <td>The current status for the account plan. (NOT_STARTED, ACTIVE, EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="accountPlanType" /></td>
    <td><code>string</code></td>
    <td>The plan type for the account. (FREE, PAID)</td>
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
    <td><a href="#get_account_plan_state"><CopyableCode code="get_account_plan_state" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This returns all of the information related to the state of the account plan related to Free Tier.</td>
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
    defaultValue="get_account_plan_state"
    values={[
        { label: 'get_account_plan_state', value: 'get_account_plan_state' }
    ]}
>
<TabItem value="get_account_plan_state">

This returns all of the information related to the state of the account plan related to Free Tier.

```sql
SELECT
accountId,
accountPlanExpirationDate,
accountPlanRemainingCredits,
accountPlanStatus,
accountPlanType
FROM aws.freetier.account_plan_states
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
