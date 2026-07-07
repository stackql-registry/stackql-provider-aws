--- 
title: budget_actions_for_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - budget_actions_for_accounts
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

Creates, updates, deletes, gets or lists a <code>budget_actions_for_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="budget_actions_for_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.budgets.budget_actions_for_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_budget_actions_for_account"
    values={[
        { label: 'describe_budget_actions_for_account', value: 'describe_budget_actions_for_account' }
    ]}
>
<TabItem value="describe_budget_actions_for_account">

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
    <td><CopyableCode code="ActionId" /></td>
    <td><code>string</code></td>
    <td>A system-generated universally unique identifier (UUID) for the action. (pattern: &lt;code&gt;^&#91;a-fA-F0-9&#93;&#123;8&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ActionThreshold" /></td>
    <td><code>object</code></td>
    <td>The trigger threshold of the action.</td>
</tr>
<tr>
    <td><CopyableCode code="ActionType" /></td>
    <td><code>string</code></td>
    <td>The type of action. This defines the type of tasks that can be carried out by this action. This field also determines the format for definition. (APPLY_IAM_POLICY, APPLY_SCP_POLICY, RUN_SSM_DOCUMENTS)</td>
</tr>
<tr>
    <td><CopyableCode code="ApprovalModel" /></td>
    <td><code>string</code></td>
    <td>This specifies if the action needs manual or automatic approval. (AUTOMATIC, MANUAL)</td>
</tr>
<tr>
    <td><CopyableCode code="BudgetName" /></td>
    <td><code>string</code></td>
    <td>A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed. (pattern: &lt;code&gt;^(?!&#91;^:\\&#93;*/action/|(?i).*&lt;script&gt;.*&lt;/script&gt;.*)&#91;^:\\&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Definition" /></td>
    <td><code>object</code></td>
    <td>Specifies all of the type-specific parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutionRoleArn" /></td>
    <td><code>string</code></td>
    <td>The role passed for action execution and reversion. Roles and actions must be in the same account. (pattern: &lt;code&gt;^arn:aws(-eusc|-cn|-us-gov|-iso|-iso-&#91;a-z&#93;&#123;1&#125;)?:iam::\d&#123;12&#125;:role(\u002F&#91;\u0021-\u007F&#93;+\u002F|\u002F)&#91;\w+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NotificationType" /></td>
    <td><code>string</code></td>
    <td>The type of a notification. It must be ACTUAL or FORECASTED. (ACTUAL, FORECASTED)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the action. (STANDBY, PENDING, EXECUTION_IN_PROGRESS, EXECUTION_SUCCESS, EXECUTION_FAILURE, REVERSE_IN_PROGRESS, REVERSE_SUCCESS, REVERSE_FAILURE, RESET_IN_PROGRESS, RESET_FAILURE)</td>
</tr>
<tr>
    <td><CopyableCode code="Subscribers" /></td>
    <td><code>array</code></td>
    <td>A list of subscribers.</td>
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
    <td><a href="#describe_budget_actions_for_account"><CopyableCode code="describe_budget_actions_for_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes all of the budget actions for an account.</td>
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
    defaultValue="describe_budget_actions_for_account"
    values={[
        { label: 'describe_budget_actions_for_account', value: 'describe_budget_actions_for_account' }
    ]}
>
<TabItem value="describe_budget_actions_for_account">

Describes all of the budget actions for an account.

```sql
SELECT
ActionId,
ActionThreshold,
ActionType,
ApprovalModel,
BudgetName,
Definition,
ExecutionRoleArn,
NotificationType,
Status,
Subscribers
FROM aws.budgets.budget_actions_for_accounts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
