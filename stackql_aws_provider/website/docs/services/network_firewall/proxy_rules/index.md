--- 
title: proxy_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - proxy_rules
  - network_firewall
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

Creates, updates, deletes, gets or lists a <code>proxy_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="proxy_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.proxy_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_proxy_rule"
    values={[
        { label: 'describe_proxy_rule', value: 'describe_proxy_rule' }
    ]}
>
<TabItem value="describe_proxy_rule">

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
    <td><CopyableCode code="proxy_rule" /></td>
    <td><code>object</code></td>
    <td>Individual rules that define match conditions and actions for application-layer traffic. Rules specify what to inspect (domains, headers, methods) and what action to take (allow, deny, alert).</td>
</tr>
<tr>
    <td><CopyableCode code="update_token" /></td>
    <td><code>string</code></td>
    <td>A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy rule. The token marks the state of the proxy rule resource at the time of the request. To make changes to the proxy rule, you provide the token in your request. Network Firewall uses the token to ensure that the proxy rule hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the proxy rule again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. (pattern: &lt;code&gt;^(&#91;0-9a-f&#93;&#123;8&#125;)-(&#91;0-9a-f&#93;&#123;4&#125;-)&#123;3&#125;(&#91;0-9a-f&#93;&#123;12&#125;)$&lt;/code&gt;)</td>
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
    <td><a href="#describe_proxy_rule"><CopyableCode code="describe_proxy_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the data objects for the specified proxy configuration for the specified proxy rule group.</td>
</tr>
<tr>
    <td><a href="#create_proxy_rules"><CopyableCode code="create_proxy_rules" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates Network Firewall ProxyRule resources. Attaches new proxy rule(s) to an existing proxy rule group. To retrieve information about individual proxy rules, use DescribeProxyRuleGroup and DescribeProxyRule.</td>
</tr>
<tr>
    <td><a href="#update_proxy_rule"><CopyableCode code="update_proxy_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProxyRuleName"><code>ProxyRuleName</code></a>, <a href="#parameter-UpdateToken"><code>UpdateToken</code></a></td>
    <td></td>
    <td>Updates the properties of the specified proxy rule.</td>
</tr>
<tr>
    <td><a href="#update_proxy_rule_priorities"><CopyableCode code="update_proxy_rule_priorities" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleGroupRequestPhase"><code>RuleGroupRequestPhase</code></a>, <a href="#parameter-UpdateToken"><code>UpdateToken</code></a></td>
    <td></td>
    <td>Updates proxy rule priorities within a proxy rule group.</td>
</tr>
<tr>
    <td><a href="#delete_proxy_rules"><CopyableCode code="delete_proxy_rules" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified ProxyRule(s). currently attached to a ProxyRuleGroup</td>
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
    defaultValue="describe_proxy_rule"
    values={[
        { label: 'describe_proxy_rule', value: 'describe_proxy_rule' }
    ]}
>
<TabItem value="describe_proxy_rule">

Returns the data objects for the specified proxy configuration for the specified proxy rule group.

```sql
SELECT
proxy_rule,
update_token
FROM aws.network_firewall.proxy_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_proxy_rules"
    values={[
        { label: 'create_proxy_rules', value: 'create_proxy_rules' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_proxy_rules">

Creates Network Firewall ProxyRule resources. Attaches new proxy rule(s) to an existing proxy rule group. To retrieve information about individual proxy rules, use DescribeProxyRuleGroup and DescribeProxyRule.

```sql
INSERT INTO aws.network_firewall.proxy_rules (
ProxyRuleGroupArn,
ProxyRuleGroupName,
Rules,
region
)
SELECT 
'{{ ProxyRuleGroupArn }}',
'{{ ProxyRuleGroupName }}',
'{{ Rules }}',
'{{ region }}'
RETURNING
proxy_rule_group,
update_token
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: proxy_rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the proxy_rules resource.
    - name: ProxyRuleGroupArn
      value: "{{ ProxyRuleGroupArn }}"
      description: |
        The Amazon Resource Name (ARN) of a proxy rule group. You must specify the ARN or the name, and you can specify both.
    - name: ProxyRuleGroupName
      value: "{{ ProxyRuleGroupName }}"
      description: |
        The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it. You must specify the ARN or the name, and you can specify both.
    - name: Rules
      description: |
        Individual rules that define match conditions and actions for application-layer traffic. Rules specify what to inspect (domains, headers, methods) and what action to take (allow, deny, alert).
      value:
        PreDNS:
          - ProxyRuleName: "{{ ProxyRuleName }}"
            Description: "{{ Description }}"
            Action: "{{ Action }}"
            Conditions: "{{ Conditions }}"
            InsertPosition: {{ InsertPosition }}
        PreREQUEST:
          - ProxyRuleName: "{{ ProxyRuleName }}"
            Description: "{{ Description }}"
            Action: "{{ Action }}"
            Conditions: "{{ Conditions }}"
            InsertPosition: {{ InsertPosition }}
        PostRESPONSE:
          - ProxyRuleName: "{{ ProxyRuleName }}"
            Description: "{{ Description }}"
            Action: "{{ Action }}"
            Conditions: "{{ Conditions }}"
            InsertPosition: {{ InsertPosition }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_proxy_rule"
    values={[
        { label: 'update_proxy_rule', value: 'update_proxy_rule' },
        { label: 'update_proxy_rule_priorities', value: 'update_proxy_rule_priorities' }
    ]}
>
<TabItem value="update_proxy_rule">

Updates the properties of the specified proxy rule.

```sql
UPDATE aws.network_firewall.proxy_rules
SET 
ProxyRuleGroupName = '{{ ProxyRuleGroupName }}',
ProxyRuleGroupArn = '{{ ProxyRuleGroupArn }}',
ProxyRuleName = '{{ ProxyRuleName }}',
Description = '{{ Description }}',
Action = '{{ Action }}',
AddConditions = '{{ AddConditions }}',
RemoveConditions = '{{ RemoveConditions }}',
UpdateToken = '{{ UpdateToken }}'
WHERE 
region = '{{ region }}' --required
AND ProxyRuleName = '{{ ProxyRuleName }}' --required
AND UpdateToken = '{{ UpdateToken }}' --required
RETURNING
proxy_rule,
removed_conditions,
update_token;
```
</TabItem>
<TabItem value="update_proxy_rule_priorities">

Updates proxy rule priorities within a proxy rule group.

```sql
UPDATE aws.network_firewall.proxy_rules
SET 
ProxyRuleGroupName = '{{ ProxyRuleGroupName }}',
ProxyRuleGroupArn = '{{ ProxyRuleGroupArn }}',
RuleGroupRequestPhase = '{{ RuleGroupRequestPhase }}',
Rules = '{{ Rules }}',
UpdateToken = '{{ UpdateToken }}'
WHERE 
region = '{{ region }}' --required
AND RuleGroupRequestPhase = '{{ RuleGroupRequestPhase }}' --required
AND UpdateToken = '{{ UpdateToken }}' --required
RETURNING
proxy_rule_group_arn,
proxy_rule_group_name,
rule_group_request_phase,
rules,
update_token;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_proxy_rules"
    values={[
        { label: 'delete_proxy_rules', value: 'delete_proxy_rules' }
    ]}
>
<TabItem value="delete_proxy_rules">

Deletes the specified ProxyRule(s). currently attached to a ProxyRuleGroup

```sql
DELETE FROM aws.network_firewall.proxy_rules
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
