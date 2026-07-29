--- 
title: budget_notifications_for_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - budget_notifications_for_accounts
  - budgets
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

Creates, updates, deletes, gets or lists a <code>budget_notifications_for_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="budget_notifications_for_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.budgets.budget_notifications_for_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_budget_notifications_for_account"
    values={[
        { label: 'describe_budget_notifications_for_account', value: 'describe_budget_notifications_for_account' }
    ]}
>
<TabItem value="describe_budget_notifications_for_account">

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
    <td><CopyableCode code="budget_name" /></td>
    <td><code>string</code></td>
    <td>A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed. (pattern: &lt;code&gt;^(?!&#91;^:\\&#93;*/action/|(?i).*&lt;script&gt;.*&lt;/script&gt;.*)&#91;^:\\&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="notifications" /></td>
    <td><code>array</code></td>
    <td>A list of notifications.</td>
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
    <td><a href="#describe_budget_notifications_for_account"><CopyableCode code="describe_budget_notifications_for_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the budget names and notifications that are associated with an account.</td>
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
    defaultValue="describe_budget_notifications_for_account"
    values={[
        { label: 'describe_budget_notifications_for_account', value: 'describe_budget_notifications_for_account' }
    ]}
>
<TabItem value="describe_budget_notifications_for_account">

Lists the budget names and notifications that are associated with an account.

```sql
SELECT
budget_name,
notifications
FROM aws.budgets.budget_notifications_for_accounts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
