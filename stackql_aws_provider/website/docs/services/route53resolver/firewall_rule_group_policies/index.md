--- 
title: firewall_rule_group_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_rule_group_policies
  - route53resolver
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

Creates, updates, deletes, gets or lists a <code>firewall_rule_group_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_rule_group_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53resolver.firewall_rule_group_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_firewall_rule_group_policy"
    values={[
        { label: 'get_firewall_rule_group_policy', value: 'get_firewall_rule_group_policy' }
    ]}
>
<TabItem value="get_firewall_rule_group_policy">

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
    <td><CopyableCode code="FirewallRuleGroupPolicy" /></td>
    <td><code>string</code></td>
    <td>The Identity and Access Management (Amazon Web Services IAM) policy for sharing the specified rule group. You can use the policy to share the rule group using Resource Access Manager (RAM).</td>
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
    <td><a href="#get_firewall_rule_group_policy"><CopyableCode code="get_firewall_rule_group_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the Identity and Access Management (Amazon Web Services IAM) policy for sharing the specified rule group. You can use the policy to share the rule group using Resource Access Manager (RAM).</td>
</tr>
<tr>
    <td><a href="#put_firewall_rule_group_policy"><CopyableCode code="put_firewall_rule_group_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Arn"><code>Arn</code></a>, <a href="#parameter-FirewallRuleGroupPolicy"><code>FirewallRuleGroupPolicy</code></a></td>
    <td></td>
    <td>Attaches an Identity and Access Management (Amazon Web Services IAM) policy for sharing the rule group. You can use the policy to share the rule group using Resource Access Manager (RAM).</td>
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
    defaultValue="get_firewall_rule_group_policy"
    values={[
        { label: 'get_firewall_rule_group_policy', value: 'get_firewall_rule_group_policy' }
    ]}
>
<TabItem value="get_firewall_rule_group_policy">

Returns the Identity and Access Management (Amazon Web Services IAM) policy for sharing the specified rule group. You can use the policy to share the rule group using Resource Access Manager (RAM).

```sql
SELECT
FirewallRuleGroupPolicy
FROM aws.route53resolver.firewall_rule_group_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_firewall_rule_group_policy"
    values={[
        { label: 'put_firewall_rule_group_policy', value: 'put_firewall_rule_group_policy' }
    ]}
>
<TabItem value="put_firewall_rule_group_policy">

Attaches an Identity and Access Management (Amazon Web Services IAM) policy for sharing the rule group. You can use the policy to share the rule group using Resource Access Manager (RAM).

```sql
REPLACE aws.route53resolver.firewall_rule_group_policies
SET 
Arn = '{{ Arn }}',
FirewallRuleGroupPolicy = '{{ FirewallRuleGroupPolicy }}'
WHERE 
region = '{{ region }}' --required
AND Arn = '{{ Arn }}' --required
AND FirewallRuleGroupPolicy = '{{ FirewallRuleGroupPolicy }}' --required
RETURNING
ReturnValue;
```
</TabItem>
</Tabs>
