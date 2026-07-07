--- 
title: rules
hide_title: false
hide_table_of_contents: false
keywords:
  - rules
  - elbv2
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

Creates, updates, deletes, gets or lists a <code>rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elbv2.rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_rules"
    values={[
        { label: 'describe_rules', value: 'describe_rules' }
    ]}
>
<TabItem value="describe_rules">

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
    <td><CopyableCode code="Actions" /></td>
    <td><code>string</code></td>
    <td>The actions. Each rule must include exactly one of the following types of actions: forward, redirect, or fixed-response, and it must be the last action to be performed.</td>
</tr>
<tr>
    <td><CopyableCode code="Conditions" /></td>
    <td><code>string</code></td>
    <td>The conditions. Each rule can include zero or one of the following conditions: http-request-method, host-header, path-pattern, and source-ip, and zero or more of the following conditions: http-header and query-string.</td>
</tr>
<tr>
    <td><CopyableCode code="IsDefault" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this is the default rule.</td>
</tr>
<tr>
    <td><CopyableCode code="Priority" /></td>
    <td><code>string</code></td>
    <td>The priority.</td>
</tr>
<tr>
    <td><CopyableCode code="RuleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="Transforms" /></td>
    <td><code>string</code></td>
    <td>The transforms for the rule.</td>
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
    <td><a href="#describe_rules"><CopyableCode code="describe_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ListenerArn"><code>ListenerArn</code></a>, <a href="#parameter-RuleArns"><code>RuleArns</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-PageSize"><code>PageSize</code></a></td>
    <td>Describes the specified rules or the rules for the specified listener. You must specify either a listener or rules.</td>
</tr>
<tr>
    <td><a href="#create_rule"><CopyableCode code="create_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ListenerArn"><code>ListenerArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Conditions"><code>Conditions</code></a>, <a href="#parameter-Priority"><code>Priority</code></a>, <a href="#parameter-Actions"><code>Actions</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-Transforms"><code>Transforms</code></a></td>
    <td>Creates a rule for the specified listener. The listener must be associated with an Application Load Balancer. Each rule consists of a priority, one or more actions, one or more conditions, and up to two optional transforms. Rules are evaluated in priority order, from the lowest value to the highest value. When the conditions for a rule are met, its actions are performed. If the conditions for no rules are met, the actions for the default rule are performed. For more information, see Listener rules in the Application Load Balancers Guide.</td>
</tr>
<tr>
    <td><a href="#modify_rule"><CopyableCode code="modify_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-RuleArn"><code>RuleArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Conditions"><code>Conditions</code></a>, <a href="#parameter-Actions"><code>Actions</code></a>, <a href="#parameter-Transforms"><code>Transforms</code></a>, <a href="#parameter-ResetTransforms"><code>ResetTransforms</code></a></td>
    <td>Replaces the specified properties of the specified rule. Any properties that you do not specify are unchanged. To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</td>
</tr>
<tr>
    <td><a href="#set_rule_priorities"><CopyableCode code="set_rule_priorities" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-RulePriorities"><code>RulePriorities</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sets the priorities of the specified rules. You can reorder the rules as long as there are no priority conflicts in the new order. Any existing rules that you do not specify retain their current priority.</td>
</tr>
<tr>
    <td><a href="#delete_rule"><CopyableCode code="delete_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-RuleArn"><code>RuleArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified rule. You can't delete the default rule.</td>
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
<tr id="parameter-ListenerArn">
    <td><CopyableCode code="ListenerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the listener.</td>
</tr>
<tr id="parameter-RuleArn">
    <td><CopyableCode code="RuleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the rule.</td>
</tr>
<tr id="parameter-RulePriorities">
    <td><CopyableCode code="RulePriorities" /></td>
    <td><code>array</code></td>
    <td>The rule priorities.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Actions">
    <td><CopyableCode code="Actions" /></td>
    <td><code>array</code></td>
    <td>The actions.</td>
</tr>
<tr id="parameter-Conditions">
    <td><CopyableCode code="Conditions" /></td>
    <td><code>array</code></td>
    <td>The conditions.</td>
</tr>
<tr id="parameter-ListenerArn">
    <td><CopyableCode code="ListenerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the listener.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results. (You received this marker from a previous call.)</td>
</tr>
<tr id="parameter-PageSize">
    <td><CopyableCode code="PageSize" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with this call.</td>
</tr>
<tr id="parameter-Priority">
    <td><CopyableCode code="Priority" /></td>
    <td><code>integer</code></td>
    <td>The rule priority. A listener can't have multiple rules with the same priority.</td>
</tr>
<tr id="parameter-ResetTransforms">
    <td><CopyableCode code="ResetTransforms" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to remove all transforms from the rule. If you specify ResetTransforms, you can't specify Transforms.</td>
</tr>
<tr id="parameter-RuleArns">
    <td><CopyableCode code="RuleArns" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARN) of the rules.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the rule.</td>
</tr>
<tr id="parameter-Transforms">
    <td><CopyableCode code="Transforms" /></td>
    <td><code>array</code></td>
    <td>The transforms to apply to requests that match this rule. You can add one host header rewrite transform and one URL rewrite transform. If you specify Transforms, you can't specify ResetTransforms.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_rules"
    values={[
        { label: 'describe_rules', value: 'describe_rules' }
    ]}
>
<TabItem value="describe_rules">

Describes the specified rules or the rules for the specified listener. You must specify either a listener or rules.

```sql
SELECT
Actions,
Conditions,
IsDefault,
Priority,
RuleArn,
Transforms
FROM aws.elbv2.rules
WHERE region = '{{ region }}' -- required
AND ListenerArn = '{{ ListenerArn }}'
AND RuleArns = '{{ RuleArns }}'
AND Marker = '{{ Marker }}'
AND PageSize = '{{ PageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rule"
    values={[
        { label: 'create_rule', value: 'create_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rule">

Creates a rule for the specified listener. The listener must be associated with an Application Load Balancer. Each rule consists of a priority, one or more actions, one or more conditions, and up to two optional transforms. Rules are evaluated in priority order, from the lowest value to the highest value. When the conditions for a rule are met, its actions are performed. If the conditions for no rules are met, the actions for the default rule are performed. For more information, see Listener rules in the Application Load Balancers Guide.

```sql
INSERT INTO aws.elbv2.rules (
ListenerArn,
region,
Conditions,
Priority,
Actions,
Tags,
Transforms
)
SELECT 
'{{ ListenerArn }}',
'{{ region }}',
'{{ Conditions }}',
'{{ Priority }}',
'{{ Actions }}',
'{{ Tags }}',
'{{ Transforms }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rules
  props:
    - name: ListenerArn
      value: "{{ ListenerArn }}"
      description: Required parameter for the rules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rules resource.
    - name: Conditions
      value: "{{ Conditions }}"
      description: The conditions.
      description: The conditions.
    - name: Priority
      value: {{ Priority }}
      description: The rule priority. A listener can't have multiple rules with the same priority.
      description: The rule priority. A listener can't have multiple rules with the same priority.
    - name: Actions
      value: "{{ Actions }}"
      description: The actions.
      description: The actions.
    - name: Tags
      value: "{{ Tags }}"
      description: The tags to assign to the rule.
      description: The tags to assign to the rule.
    - name: Transforms
      value: "{{ Transforms }}"
      description: The transforms to apply to requests that match this rule. You can add one host header rewrite transform and one URL rewrite transform.
      description: The transforms to apply to requests that match this rule. You can add one host header rewrite transform and one URL rewrite transform.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_rule"
    values={[
        { label: 'modify_rule', value: 'modify_rule' },
        { label: 'set_rule_priorities', value: 'set_rule_priorities' }
    ]}
>
<TabItem value="modify_rule">

Replaces the specified properties of the specified rule. Any properties that you do not specify are unchanged. To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.

```sql
UPDATE aws.elbv2.rules
SET 
-- No updatable properties
WHERE 
RuleArn = '{{ RuleArn }}' --required
AND region = '{{ region }}' --required
AND Conditions = '{{ Conditions}}'
AND Actions = '{{ Actions}}'
AND Transforms = '{{ Transforms}}'
AND ResetTransforms = {{ ResetTransforms}}
RETURNING
line_items;
```
</TabItem>
<TabItem value="set_rule_priorities">

Sets the priorities of the specified rules. You can reorder the rules as long as there are no priority conflicts in the new order. Any existing rules that you do not specify retain their current priority.

```sql
UPDATE aws.elbv2.rules
SET 
-- No updatable properties
WHERE 
RulePriorities = '{{ RulePriorities }}' --required
AND region = '{{ region }}' --required
RETURNING
line_items;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rule"
    values={[
        { label: 'delete_rule', value: 'delete_rule' }
    ]}
>
<TabItem value="delete_rule">

Deletes the specified rule. You can't delete the default rule.

```sql
DELETE FROM aws.elbv2.rules
WHERE RuleArn = '{{ RuleArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
