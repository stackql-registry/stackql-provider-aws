--- 
title: firewall_rule_types
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_rule_types
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

Creates, updates, deletes, gets or lists a <code>firewall_rule_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_rule_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53resolver.firewall_rule_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_firewall_rule_types"
    values={[
        { label: 'list_firewall_rule_types', value: 'list_firewall_rule_types' }
    ]}
>
<TabItem value="list_firewall_rule_types">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the rule type.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the rule type.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_type" /></td>
    <td><code>string</code></td>
    <td>The category or class of the rule type, such as FirewallAdvancedContentCategory or FirewallAdvancedThreatCategory.</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_info" /></td>
    <td><code>object</code></td>
    <td>For rule types that require an external subscription (today, only the PartnerThreatProtection variant), describes the AWS Marketplace product that backs the rule type. Absent for rule types that are managed by AWS and do not require a separate subscription. See SubscriptionInfo.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The specific identifier within the rule type category, such as VIOLENCE_AND_HATE_SPEECH or PHISHING.</td>
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
    <td><a href="#list_firewall_rule_types"><CopyableCode code="list_firewall_rule_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the rule-type variants that can be used in the FirewallRuleType field of CreateFirewallRule and UpdateFirewallRule. Each returned FirewallRuleTypeDefinition identifies one variant + value combination — for example, FirewallAdvancedContentCategory + VIOLENCE_AND_HATE_SPEECH, or PartnerThreatProtection + a partner-managed feed. The supported RuleType filter values are FirewallAdvancedContentCategory, FirewallAdvancedThreatCategory, DnsThreatProtection, and PartnerThreatProtection. When a returned definition's variant requires an external subscription (currently only PartnerThreatProtection), the response also includes a SubscriptionInfo identifying the AWS Marketplace product that backs it; absence of SubscriptionInfo means the variant is fully managed by AWS and requires no separate subscription.</td>
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
    defaultValue="list_firewall_rule_types"
    values={[
        { label: 'list_firewall_rule_types', value: 'list_firewall_rule_types' }
    ]}
>
<TabItem value="list_firewall_rule_types">

Retrieves the rule-type variants that can be used in the FirewallRuleType field of CreateFirewallRule and UpdateFirewallRule. Each returned FirewallRuleTypeDefinition identifies one variant + value combination — for example, FirewallAdvancedContentCategory + VIOLENCE_AND_HATE_SPEECH, or PartnerThreatProtection + a partner-managed feed. The supported RuleType filter values are FirewallAdvancedContentCategory, FirewallAdvancedThreatCategory, DnsThreatProtection, and PartnerThreatProtection. When a returned definition's variant requires an external subscription (currently only PartnerThreatProtection), the response also includes a SubscriptionInfo identifying the AWS Marketplace product that backs it; absence of SubscriptionInfo means the variant is fully managed by AWS and requires no separate subscription.

```sql
SELECT
description,
display_name,
rule_type,
subscription_info,
value
FROM aws.route53resolver.firewall_rule_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
