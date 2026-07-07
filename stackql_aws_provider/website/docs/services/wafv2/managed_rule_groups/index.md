--- 
title: managed_rule_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_rule_groups
  - wafv2
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

Creates, updates, deletes, gets or lists a <code>managed_rule_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_rule_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wafv2.managed_rule_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_managed_rule_group"
    values={[
        { label: 'describe_managed_rule_group', value: 'describe_managed_rule_group' }
    ]}
>
<TabItem value="describe_managed_rule_group">

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
    <td><CopyableCode code="AvailableLabels" /></td>
    <td><code>array</code></td>
    <td>The labels that one or more rules in this rule group add to matching web requests. These labels are defined in the RuleLabels for a Rule.</td>
</tr>
<tr>
    <td><CopyableCode code="Capacity" /></td>
    <td><code>integer (int64)</code></td>
    <td>The web ACL capacity units (WCUs) required for this rule group. WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. For more information, see WAF web ACL capacity units (WCU) in the WAF Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="ConsumedLabels" /></td>
    <td><code>array</code></td>
    <td>The labels that one or more rules in this rule group match against in label match statements. These labels are defined in a LabelMatchStatement specification, in the Statement definition of a rule.</td>
</tr>
<tr>
    <td><CopyableCode code="LabelNamespace" /></td>
    <td><code>string</code></td>
    <td>The label namespace prefix for this rule group. All labels added by rules in this rule group have this prefix. The syntax for the label namespace prefix for a managed rule group is the following: awswaf:managed:<code>&lt;vendor&gt;</code>:&lt;rule group name&gt;: When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon: &lt;label namespace&gt;:&lt;label from rule&gt; (pattern: &lt;code&gt;^&#91;0-9A-Za-z_\-:&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Rules" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="SnsTopicArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) of the Amazon Simple Notification Service SNS topic that's used to provide notification of changes to the managed rule group. You can subscribe to the SNS topic to receive notifications when the managed rule group is modified, such as for new versions and for version expiration. For more information, see the Amazon Simple Notification Service Developer Guide. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="VersionName" /></td>
    <td><code>string</code></td>
    <td>The managed rule group's version. (pattern: &lt;code&gt;^&#91;\w#:\.\-/&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#describe_managed_rule_group"><CopyableCode code="describe_managed_rule_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides high-level information for a managed rule group, including descriptions of the rules.</td>
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
    defaultValue="describe_managed_rule_group"
    values={[
        { label: 'describe_managed_rule_group', value: 'describe_managed_rule_group' }
    ]}
>
<TabItem value="describe_managed_rule_group">

Provides high-level information for a managed rule group, including descriptions of the rules.

```sql
SELECT
AvailableLabels,
Capacity,
ConsumedLabels,
LabelNamespace,
Rules,
SnsTopicArn,
VersionName
FROM aws.wafv2.managed_rule_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
