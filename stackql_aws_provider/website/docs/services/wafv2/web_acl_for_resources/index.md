--- 
title: web_acl_for_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - web_acl_for_resources
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

Creates, updates, deletes, gets or lists a <code>web_acl_for_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="web_acl_for_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wafv2.web_acl_for_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_web_acl_for_resource"
    values={[
        { label: 'get_web_acl_for_resource', value: 'get_web_acl_for_resource' }
    ]}
>
<TabItem value="get_web_acl_for_resource">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the web ACL that you want to associate with the resource. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_config" /></td>
    <td><code>object</code></td>
    <td>Returns a list of ApplicationAttributes.</td>
</tr>
<tr>
    <td><CopyableCode code="association_config" /></td>
    <td><code>object</code></td>
    <td>Specifies custom configurations for the associations between the web ACL and protected resources. Use this to customize the maximum size of the request body that your protected resources forward to WAF for inspection. You can customize this setting for CloudFront, API Gateway, Amazon Cognito, App Runner, or Verified Access resources. The default setting is 16 KB (16,384 bytes). You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see WAF Pricing. For Application Load Balancer and AppSync, the limit is fixed at 8 KB (8,192 bytes).</td>
</tr>
<tr>
    <td><CopyableCode code="capacity" /></td>
    <td><code>integer (int64)</code></td>
    <td>The web ACL capacity units (WCUs) currently being used by this web ACL. WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. For more information, see WAF web ACL capacity units (WCU) in the WAF Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="captcha_config" /></td>
    <td><code>object</code></td>
    <td>Specifies how WAF should handle CAPTCHA evaluations for rules that don't have their own CaptchaConfig settings. If you don't specify this, WAF uses its default settings for CaptchaConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="challenge_config" /></td>
    <td><code>object</code></td>
    <td>Specifies how WAF should handle challenge evaluations for rules that don't have their own ChallengeConfig settings. If you don't specify this, WAF uses its default settings for ChallengeConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_response_bodies" /></td>
    <td><code>object</code></td>
    <td>A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL. For information about customizing web requests and responses, see Customizing web requests and responses in WAF in the WAF Developer Guide. For information about the limits on count and size for custom request and response settings, see WAF quotas in the WAF Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="data_protection_config" /></td>
    <td><code>object</code></td>
    <td>Specifies data protection to apply to the web request data for the web ACL. This is a web ACL level data protection option. The data protection that you configure for the web ACL alters the data that's available for any other data collection activity, including your WAF logging destinations, web ACL request sampling, and Amazon Security Lake data collection and management. Your other option for data protection is in the logging configuration, which only affects logging.</td>
</tr>
<tr>
    <td><CopyableCode code="default_action" /></td>
    <td><code>object</code></td>
    <td>The action to perform if none of the Rules contained in the WebACL match.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the web ACL that helps with identification. (pattern: &lt;code&gt;^&#91;\w+=:#@/\-,\.&#93;&#91;\w+=:#@/\-,\.\s&#93;+&#91;\w+=:#@/\-,\.&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the WebACL. This ID is returned in the responses to create and list commands. You use this ID to do things like get, update, and delete a WebACL. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-(?:&#91;0-9a-f&#93;&#123;4&#125;-)&#123;3&#125;&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="label_namespace" /></td>
    <td><code>string</code></td>
    <td>The label namespace prefix for this web ACL. All labels added by rules in this web ACL have this prefix. The syntax for the label namespace prefix for a web ACL is the following: awswaf:&lt;account ID&gt;:webacl:&lt;web ACL name&gt;: When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon: &lt;label namespace&gt;:&lt;label from rule&gt; (pattern: &lt;code&gt;^&#91;0-9A-Za-z_\-:&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="managed_by_firewall_manager" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this web ACL was created by Firewall Manager and is being managed by Firewall Manager. If true, then only Firewall Manager can delete the web ACL or any Firewall Manager rule groups in the web ACL. See also the properties RetrofittedByFirewallManager, PreProcessFirewallManagerRuleGroups, and PostProcessFirewallManagerRuleGroups.</td>
</tr>
<tr>
    <td><CopyableCode code="monetization_config" /></td>
    <td><code>object</code></td>
    <td>The monetization configuration for the web ACL. Required when any rule in the web ACL uses the Monetize action. Specifies the cryptocurrency payment networks and currency mode for AI bot monetization.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the web ACL. You cannot change the name of a web ACL after you create it. (pattern: &lt;code&gt;^&#91;\w\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="on_source_d_do_s_protection_config" /></td>
    <td><code>object</code></td>
    <td>Configures the level of DDoS protection that applies to web ACLs associated with Application Load Balancers.</td>
</tr>
<tr>
    <td><CopyableCode code="post_process_firewall_manager_rule_groups" /></td>
    <td><code>array</code></td>
    <td>The last set of rules for WAF to process in the web ACL. This is defined in an Firewall Manager WAF policy and contains only rule group references. You can't alter these. Any rules and rule groups that you define for the web ACL are prioritized before these. In the Firewall Manager WAF policy, the Firewall Manager administrator can define a set of rule groups to run first in the web ACL and a set of rule groups to run last. Within each set, the administrator prioritizes the rule groups, to determine their relative processing order.</td>
</tr>
<tr>
    <td><CopyableCode code="pre_process_firewall_manager_rule_groups" /></td>
    <td><code>array</code></td>
    <td>The first set of rules for WAF to process in the web ACL. This is defined in an Firewall Manager WAF policy and contains only rule group references. You can't alter these. Any rules and rule groups that you define for the web ACL are prioritized after these. In the Firewall Manager WAF policy, the Firewall Manager administrator can define a set of rule groups to run first in the web ACL and a set of rule groups to run last. Within each set, the administrator prioritizes the rule groups, to determine their relative processing order.</td>
</tr>
<tr>
    <td><CopyableCode code="retrofitted_by_firewall_manager" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this web ACL was created by a customer account and then retrofitted by Firewall Manager. If true, then the web ACL is currently being managed by a Firewall Manager WAF policy, and only Firewall Manager can manage any Firewall Manager rule groups in the web ACL. See also the properties ManagedByFirewallManager, PreProcessFirewallManagerRuleGroups, and PostProcessFirewallManagerRuleGroups.</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>The Rule statements used to identify the web requests that you want to manage. Each rule includes one top-level statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.</td>
</tr>
<tr>
    <td><CopyableCode code="token_domains" /></td>
    <td><code>array</code></td>
    <td>Specifies the domains that WAF should accept in a web request token. This enables the use of tokens across multiple protected websites. When WAF provides a token, it uses the domain of the Amazon Web Services resource that the web ACL is protecting. If you don't specify a list of token domains, WAF accepts tokens only for the domain of the protected resource. With a token domain list, WAF accepts the resource's host domain plus all domains in the token domain list, including their prefixed subdomains.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility_config" /></td>
    <td><code>object</code></td>
    <td>Defines and enables Amazon CloudWatch metrics and web request sample collection.</td>
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
    <td><a href="#get_web_acl_for_resource"><CopyableCode code="get_web_acl_for_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the WebACL for the specified resource. This call uses GetWebACL, to verify that your account has permission to access the retrieved web ACL. If you get an error that indicates that your account isn't authorized to perform wafv2:GetWebACL on the resource, that error won't be included in your CloudTrail event history. For Amazon CloudFront, don't use this call. Instead, call the CloudFront action GetDistributionConfig. For information, see GetDistributionConfig in the Amazon CloudFront API Reference. Required permissions for customer-managed IAM policies This call requires permissions that are specific to the protected resource type. For details, see Permissions for GetWebACLForResource in the WAF Developer Guide.</td>
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
    defaultValue="get_web_acl_for_resource"
    values={[
        { label: 'get_web_acl_for_resource', value: 'get_web_acl_for_resource' }
    ]}
>
<TabItem value="get_web_acl_for_resource">

Retrieves the WebACL for the specified resource. This call uses GetWebACL, to verify that your account has permission to access the retrieved web ACL. If you get an error that indicates that your account isn't authorized to perform wafv2:GetWebACL on the resource, that error won't be included in your CloudTrail event history. For Amazon CloudFront, don't use this call. Instead, call the CloudFront action GetDistributionConfig. For information, see GetDistributionConfig in the Amazon CloudFront API Reference. Required permissions for customer-managed IAM policies This call requires permissions that are specific to the protected resource type. For details, see Permissions for GetWebACLForResource in the WAF Developer Guide.

```sql
SELECT
arn,
application_config,
association_config,
capacity,
captcha_config,
challenge_config,
custom_response_bodies,
data_protection_config,
default_action,
description,
id,
label_namespace,
managed_by_firewall_manager,
monetization_config,
name,
on_source_d_do_s_protection_config,
post_process_firewall_manager_rule_groups,
pre_process_firewall_manager_rule_groups,
retrofitted_by_firewall_manager,
rules,
token_domains,
visibility_config
FROM aws.wafv2.web_acl_for_resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
