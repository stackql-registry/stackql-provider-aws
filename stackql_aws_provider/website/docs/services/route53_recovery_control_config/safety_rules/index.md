--- 
title: safety_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - safety_rules
  - route53_recovery_control_config
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

Creates, updates, deletes, gets or lists a <code>safety_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="safety_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53_recovery_control_config.safety_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_safety_rule"
    values={[
        { label: 'describe_safety_rule', value: 'describe_safety_rule' },
        { label: 'list_safety_rules', value: 'list_safety_rules' }
    ]}
>
<TabItem value="describe_safety_rule">

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
    <td><CopyableCode code="assertion_rule" /></td>
    <td><code>object</code></td>
    <td>The assertion rule in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="gating_rule" /></td>
    <td><code>object</code></td>
    <td>The gating rule in the response.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_safety_rules">

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
    <td><CopyableCode code="assertion" /></td>
    <td><code>object</code></td>
    <td>An assertion rule enforces that, when a routing control state is changed, the criteria set by the rule configuration is met. Otherwise, the change to the routing control state is not accepted. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.</td>
</tr>
<tr>
    <td><CopyableCode code="gating" /></td>
    <td><code>object</code></td>
    <td>A gating rule verifies that a gating routing control or set of gating routing controls, evaluates as true, based on a rule configuration that you specify, which allows a set of routing control state changes to complete. For example, if you specify one gating routing control and you set the Type in the rule configuration to OR, that indicates that you must set the gating routing control to On for the rule to evaluate as true; that is, for the gating control "switch" to be "On". When you do that, then you can update the routing control states for the target routing controls that you specify in the gating rule.</td>
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
    <td><a href="#describe_safety_rule"><CopyableCode code="describe_safety_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-safety_rule_arn"><code>safety_rule_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a safety rule.</td>
</tr>
<tr>
    <td><a href="#list_safety_rules"><CopyableCode code="list_safety_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-control_panel_arn"><code>control_panel_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>List the safety rules (the assertion rules and gating rules) that you've defined for the routing controls in a control panel.</td>
</tr>
<tr>
    <td><a href="#create_safety_rule"><CopyableCode code="create_safety_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a safety rule in a control panel. Safety rules let you add safeguards around changing routing control states, and for enabling and disabling routing controls, to help prevent unexpected outcomes. There are two types of safety rules: assertion rules and gating rules. Assertion rule: An assertion rule enforces that, when you change a routing control state, that a certain criteria is met. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario. Gating rule: A gating rule lets you configure a gating routing control as an overall "on/off" switch for a group of routing controls. Or, you can configure more complex gating scenarios, for example by configuring multiple gating routing controls. For more information, see Safety rules in the Amazon Route 53 Application Recovery Controller Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_safety_rule"><CopyableCode code="update_safety_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update a safety rule (an assertion rule or gating rule). You can only update the name and the waiting period for a safety rule. To make other updates, delete the safety rule and create a new one.</td>
</tr>
<tr>
    <td><a href="#delete_safety_rule"><CopyableCode code="delete_safety_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-safety_rule_arn"><code>safety_rule_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a safety rule. /&gt;</td>
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
<tr id="parameter-control_panel_arn">
    <td><CopyableCode code="control_panel_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the control panel.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-safety_rule_arn">
    <td><CopyableCode code="safety_rule_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the safety rule.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of objects that you want to return with this call.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token that identifies which batch of results you want to see.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_safety_rule"
    values={[
        { label: 'describe_safety_rule', value: 'describe_safety_rule' },
        { label: 'list_safety_rules', value: 'list_safety_rules' }
    ]}
>
<TabItem value="describe_safety_rule">

Returns information about a safety rule.

```sql
SELECT
assertion_rule,
gating_rule
FROM aws.route53_recovery_control_config.safety_rules
WHERE safety_rule_arn = '{{ safety_rule_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_safety_rules">

List the safety rules (the assertion rules and gating rules) that you've defined for the routing controls in a control panel.

```sql
SELECT
assertion,
gating
FROM aws.route53_recovery_control_config.safety_rules
WHERE control_panel_arn = '{{ control_panel_arn }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_safety_rule"
    values={[
        { label: 'create_safety_rule', value: 'create_safety_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_safety_rule">

Creates a safety rule in a control panel. Safety rules let you add safeguards around changing routing control states, and for enabling and disabling routing controls, to help prevent unexpected outcomes. There are two types of safety rules: assertion rules and gating rules. Assertion rule: An assertion rule enforces that, when you change a routing control state, that a certain criteria is met. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario. Gating rule: A gating rule lets you configure a gating routing control as an overall "on/off" switch for a group of routing controls. Or, you can configure more complex gating scenarios, for example by configuring multiple gating routing controls. For more information, see Safety rules in the Amazon Route 53 Application Recovery Controller Developer Guide.

```sql
INSERT INTO aws.route53_recovery_control_config.safety_rules (
AssertionRule,
ClientToken,
GatingRule,
Tags,
region
)
SELECT 
'{{ AssertionRule }}',
'{{ ClientToken }}',
'{{ GatingRule }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
assertion_rule,
gating_rule
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: safety_rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the safety_rules resource.
    - name: AssertionRule
      description: |
        A new assertion rule for a control panel.
      value:
        AssertedControls:
          - "{{ AssertedControls }}"
        ControlPanelArn: "{{ ControlPanelArn }}"
        Name: "{{ Name }}"
        RuleConfig:
          Inverted: {{ Inverted }}
          Threshold: {{ Threshold }}
          Type: "{{ Type }}"
        WaitPeriodMs: {{ WaitPeriodMs }}
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: GatingRule
      description: |
        A new gating rule for a control panel.
      value:
        ControlPanelArn: "{{ ControlPanelArn }}"
        GatingControls:
          - "{{ GatingControls }}"
        Name: "{{ Name }}"
        RuleConfig:
          Inverted: {{ Inverted }}
          Threshold: {{ Threshold }}
          Type: "{{ Type }}"
        TargetControls:
          - "{{ TargetControls }}"
        WaitPeriodMs: {{ WaitPeriodMs }}
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_safety_rule"
    values={[
        { label: 'update_safety_rule', value: 'update_safety_rule' }
    ]}
>
<TabItem value="update_safety_rule">

Update a safety rule (an assertion rule or gating rule). You can only update the name and the waiting period for a safety rule. To make other updates, delete the safety rule and create a new one.

```sql
UPDATE aws.route53_recovery_control_config.safety_rules
SET 
AssertionRuleUpdate = '{{ AssertionRuleUpdate }}',
GatingRuleUpdate = '{{ GatingRuleUpdate }}'
WHERE 
region = '{{ region }}' --required
RETURNING
assertion_rule,
gating_rule;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_safety_rule"
    values={[
        { label: 'delete_safety_rule', value: 'delete_safety_rule' }
    ]}
>
<TabItem value="delete_safety_rule">

Deletes a safety rule. /&gt;

```sql
DELETE FROM aws.route53_recovery_control_config.safety_rules
WHERE safety_rule_arn = '{{ safety_rule_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
