--- 
title: budget_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - budget_actions
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

Creates, updates, deletes, gets or lists a <code>budget_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="budget_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.budgets.budget_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_budget_action"
    values={[
        { label: 'describe_budget_action', value: 'describe_budget_action' }
    ]}
>
<TabItem value="describe_budget_action">

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
    <td>The account ID of the user. It's a 12-digit number. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>object</code></td>
    <td>A budget action resource.</td>
</tr>
<tr>
    <td><CopyableCode code="budget_name" /></td>
    <td><code>string</code></td>
    <td>A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed. (pattern: &lt;code&gt;^(?!&#91;^:\\&#93;*/action/|(?i).*&lt;script&gt;.*&lt;/script&gt;.*)&#91;^:\\&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#describe_budget_action"><CopyableCode code="describe_budget_action" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a budget action detail.</td>
</tr>
<tr>
    <td><a href="#create_budget_action"><CopyableCode code="create_budget_action" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountId"><code>AccountId</code></a>, <a href="#parameter-BudgetName"><code>BudgetName</code></a>, <a href="#parameter-NotificationType"><code>NotificationType</code></a>, <a href="#parameter-ActionType"><code>ActionType</code></a>, <a href="#parameter-ActionThreshold"><code>ActionThreshold</code></a>, <a href="#parameter-Definition"><code>Definition</code></a>, <a href="#parameter-ExecutionRoleArn"><code>ExecutionRoleArn</code></a>, <a href="#parameter-ApprovalModel"><code>ApprovalModel</code></a>, <a href="#parameter-Subscribers"><code>Subscribers</code></a></td>
    <td></td>
    <td>Creates a budget action.</td>
</tr>
<tr>
    <td><a href="#update_budget_action"><CopyableCode code="update_budget_action" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountId"><code>AccountId</code></a>, <a href="#parameter-BudgetName"><code>BudgetName</code></a>, <a href="#parameter-ActionId"><code>ActionId</code></a></td>
    <td></td>
    <td>Updates a budget action.</td>
</tr>
<tr>
    <td><a href="#delete_budget_action"><CopyableCode code="delete_budget_action" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a budget action.</td>
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
    defaultValue="describe_budget_action"
    values={[
        { label: 'describe_budget_action', value: 'describe_budget_action' }
    ]}
>
<TabItem value="describe_budget_action">

Describes a budget action detail.

```sql
SELECT
account_id,
action,
budget_name
FROM aws.budgets.budget_actions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_budget_action"
    values={[
        { label: 'create_budget_action', value: 'create_budget_action' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_budget_action">

Creates a budget action.

```sql
INSERT INTO aws.budgets.budget_actions (
AccountId,
BudgetName,
NotificationType,
ActionType,
ActionThreshold,
Definition,
ExecutionRoleArn,
ApprovalModel,
Subscribers,
ResourceTags,
region
)
SELECT 
'{{ AccountId }}' /* required */,
'{{ BudgetName }}' /* required */,
'{{ NotificationType }}' /* required */,
'{{ ActionType }}' /* required */,
'{{ ActionThreshold }}' /* required */,
'{{ Definition }}' /* required */,
'{{ ExecutionRoleArn }}' /* required */,
'{{ ApprovalModel }}' /* required */,
'{{ Subscribers }}' /* required */,
'{{ ResourceTags }}',
'{{ region }}'
RETURNING
account_id,
action_id,
budget_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: budget_actions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the budget_actions resource.
    - name: AccountId
      value: "{{ AccountId }}"
      description: |
        The account ID of the user. It's a 12-digit number.
    - name: BudgetName
      value: "{{ BudgetName }}"
      description: |
        A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
    - name: NotificationType
      value: "{{ NotificationType }}"
      description: |
        The type of a notification. It must be ACTUAL or FORECASTED.
      valid_values: ['ACTUAL', 'FORECASTED']
    - name: ActionType
      value: "{{ ActionType }}"
      description: |
        The type of action. This defines the type of tasks that can be carried out by this action. This field also determines the format for definition.
      valid_values: ['APPLY_IAM_POLICY', 'APPLY_SCP_POLICY', 'RUN_SSM_DOCUMENTS']
    - name: ActionThreshold
      description: |
        The trigger threshold of the action.
      value:
        ActionThresholdValue: {{ ActionThresholdValue }}
        ActionThresholdType: "{{ ActionThresholdType }}"
    - name: Definition
      description: |
        Specifies all of the type-specific parameters.
      value:
        IamActionDefinition:
          PolicyArn: "{{ PolicyArn }}"
          Roles:
            - "{{ Roles }}"
          Groups:
            - "{{ Groups }}"
          Users:
            - "{{ Users }}"
        ScpActionDefinition:
          PolicyId: "{{ PolicyId }}"
          TargetIds:
            - "{{ TargetIds }}"
        SsmActionDefinition:
          ActionSubType: "{{ ActionSubType }}"
          Region: "{{ Region }}"
          InstanceIds:
            - "{{ InstanceIds }}"
    - name: ExecutionRoleArn
      value: "{{ ExecutionRoleArn }}"
      description: |
        The role passed for action execution and reversion. Roles and actions must be in the same account.
    - name: ApprovalModel
      value: "{{ ApprovalModel }}"
      description: |
        This specifies if the action needs manual or automatic approval.
      valid_values: ['AUTOMATIC', 'MANUAL']
    - name: Subscribers
      description: |
        A list of subscribers.
      value:
        - SubscriptionType: "{{ SubscriptionType }}"
          Address: "{{ Address }}"
    - name: ResourceTags
      description: |
        An optional list of tags to associate with the specified budget action. Each tag consists of a key and a value, and each key must be unique for the resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_budget_action"
    values={[
        { label: 'update_budget_action', value: 'update_budget_action' }
    ]}
>
<TabItem value="update_budget_action">

Updates a budget action.

```sql
UPDATE aws.budgets.budget_actions
SET 
AccountId = '{{ AccountId }}',
BudgetName = '{{ BudgetName }}',
ActionId = '{{ ActionId }}',
NotificationType = '{{ NotificationType }}',
ActionThreshold = '{{ ActionThreshold }}',
Definition = '{{ Definition }}',
ExecutionRoleArn = '{{ ExecutionRoleArn }}',
ApprovalModel = '{{ ApprovalModel }}',
Subscribers = '{{ Subscribers }}'
WHERE 
region = '{{ region }}' --required
AND AccountId = '{{ AccountId }}' --required
AND BudgetName = '{{ BudgetName }}' --required
AND ActionId = '{{ ActionId }}' --required
RETURNING
account_id,
budget_name,
new_action,
old_action;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_budget_action"
    values={[
        { label: 'delete_budget_action', value: 'delete_budget_action' }
    ]}
>
<TabItem value="delete_budget_action">

Deletes a budget action.

```sql
DELETE FROM aws.budgets.budget_actions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
