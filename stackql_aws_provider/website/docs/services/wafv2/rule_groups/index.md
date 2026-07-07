--- 
title: rule_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - rule_groups
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

Creates, updates, deletes, gets or lists a <code>rule_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rule_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wafv2.rule_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_rule_groups"
    values={[
        { label: 'list_rule_groups', value: 'list_rule_groups' },
        { label: 'get_rule_group', value: 'get_rule_group' }
    ]}
>
<TabItem value="list_rule_groups">

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
    <td><CopyableCode code="NextMarker" /></td>
    <td><code>string</code></td>
    <td>When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RuleGroups" /></td>
    <td><code>array</code></td>
    <td>Array of rule groups. If you specified a Limit in your request, this might not be the full list.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_rule_group">

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
    <td><CopyableCode code="LockToken" /></td>
    <td><code>string</code></td>
    <td>A token used for optimistic locking. WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-(?:&#91;0-9a-f&#93;&#123;4&#125;-)&#123;3&#125;&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RuleGroup" /></td>
    <td><code>object</code></td>
    <td>A rule group defines a collection of rules to inspect and control web requests that you can use in a WebACL. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements.</td>
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
    <td><a href="#list_rule_groups"><CopyableCode code="list_rule_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves an array of RuleGroupSummary objects for the rule groups that you manage.</td>
</tr>
<tr>
    <td><a href="#get_rule_group"><CopyableCode code="get_rule_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified RuleGroup.</td>
</tr>
<tr>
    <td><a href="#create_rule_group"><CopyableCode code="create_rule_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Scope"><code>Scope</code></a>, <a href="#parameter-Capacity"><code>Capacity</code></a>, <a href="#parameter-VisibilityConfig"><code>VisibilityConfig</code></a></td>
    <td></td>
    <td>Creates a RuleGroup per the specifications provided. A rule group defines a collection of rules to inspect and control web requests that you can use in a WebACL. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements.</td>
</tr>
<tr>
    <td><a href="#update_rule_group"><CopyableCode code="update_rule_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Scope"><code>Scope</code></a>, <a href="#parameter-Id"><code>Id</code></a>, <a href="#parameter-VisibilityConfig"><code>VisibilityConfig</code></a>, <a href="#parameter-LockToken"><code>LockToken</code></a></td>
    <td></td>
    <td>Updates the specified RuleGroup. This operation completely replaces the mutable specifications that you already have for the rule group with the ones that you provide to this call. To modify a rule group, do the following: Retrieve it by calling GetRuleGroup Update its settings as needed Provide the complete rule group specification to this call A rule group defines a collection of rules to inspect and control web requests that you can use in a WebACL. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. Temporary inconsistencies during updates When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes. The following are examples of the temporary inconsistencies that you might notice during change propagation: After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable. After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another. After you change a rule action setting, you might see the old action in some places and the new action in others. After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another.</td>
</tr>
<tr>
    <td><a href="#delete_rule_group"><CopyableCode code="delete_rule_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified RuleGroup.</td>
</tr>
<tr>
    <td><a href="#delete_firewall_manager_rule_groups"><CopyableCode code="delete_firewall_manager_rule_groups" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes all rule groups that are managed by Firewall Manager from the specified WebACL. You can only use this if ManagedByFirewallManager and RetrofittedByFirewallManager are both false in the web ACL.</td>
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
    defaultValue="list_rule_groups"
    values={[
        { label: 'list_rule_groups', value: 'list_rule_groups' },
        { label: 'get_rule_group', value: 'get_rule_group' }
    ]}
>
<TabItem value="list_rule_groups">

Retrieves an array of RuleGroupSummary objects for the rule groups that you manage.

```sql
SELECT
NextMarker,
RuleGroups
FROM aws.wafv2.rule_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_rule_group">

Retrieves the specified RuleGroup.

```sql
SELECT
LockToken,
RuleGroup
FROM aws.wafv2.rule_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rule_group"
    values={[
        { label: 'create_rule_group', value: 'create_rule_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rule_group">

Creates a RuleGroup per the specifications provided. A rule group defines a collection of rules to inspect and control web requests that you can use in a WebACL. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements.

```sql
INSERT INTO aws.wafv2.rule_groups (
Name,
Scope,
Capacity,
Description,
Rules,
VisibilityConfig,
Tags,
CustomResponseBodies,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ Scope }}' /* required */,
{{ Capacity }} /* required */,
'{{ Description }}',
'{{ Rules }}',
'{{ VisibilityConfig }}' /* required */,
'{{ Tags }}',
'{{ CustomResponseBodies }}',
'{{ region }}'
RETURNING
Summary
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rule_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rule_groups resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the rule group. You cannot change the name of a rule group after you create it.
    - name: Scope
      value: "{{ Scope }}"
      description: |
        Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use CLOUDFRONT. To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1. API and SDKs - For all calls, use the Region endpoint us-east-1.
      valid_values: ['CLOUDFRONT', 'REGIONAL']
    - name: Capacity
      value: {{ Capacity }}
      description: |
        The web ACL capacity units (WCUs) required for this rule group. When you create your own rule group, you define this, and you cannot change it after creation. When you add or modify the rules in a rule group, WAF enforces this limit. You can check the capacity for a set of rules using CheckCapacity. WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. For more information, see WAF web ACL capacity units (WCU) in the WAF Developer Guide.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the rule group that helps with identification.
    - name: Rules
      description: |
        The Rule statements used to identify the web requests that you want to manage. Each rule includes one top-level statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.
      value:
        - Name: "{{ Name }}"
          Priority: {{ Priority }}
          Statement:
            ByteMatchStatement:
              SearchString: "{{ SearchString }}"
              FieldToMatch:
                SingleHeader:
                  Name: "{{ Name }}"
                SingleQueryArgument:
                  Name: "{{ Name }}"
                AllQueryArguments: "{{ AllQueryArguments }}"
                UriPath: "{{ UriPath }}"
                QueryString: "{{ QueryString }}"
                Body:
                  OversizeHandling: "{{ OversizeHandling }}"
                Method: "{{ Method }}"
                JsonBody:
                  MatchPattern: "{{ MatchPattern }}"
                  MatchScope: "{{ MatchScope }}"
                  InvalidFallbackBehavior: "{{ InvalidFallbackBehavior }}"
                  OversizeHandling: "{{ OversizeHandling }}"
                Headers:
                  MatchPattern: "{{ MatchPattern }}"
                  MatchScope: "{{ MatchScope }}"
                  OversizeHandling: "{{ OversizeHandling }}"
                Cookies:
                  MatchPattern: "{{ MatchPattern }}"
                  MatchScope: "{{ MatchScope }}"
                  OversizeHandling: "{{ OversizeHandling }}"
                HeaderOrder:
                  OversizeHandling: "{{ OversizeHandling }}"
                JA3Fingerprint:
                  FallbackBehavior: "{{ FallbackBehavior }}"
                JA4Fingerprint:
                  FallbackBehavior: "{{ FallbackBehavior }}"
                UriFragment:
                  FallbackBehavior: "{{ FallbackBehavior }}"
              TextTransformations:
                - Priority: {{ Priority }}
                  Type: "{{ Type }}"
              PositionalConstraint: "{{ PositionalConstraint }}"
            SqliMatchStatement:
              FieldToMatch:
                SingleHeader:
                  Name: "{{ Name }}"
                SingleQueryArgument:
                  Name: "{{ Name }}"
                AllQueryArguments: "{{ AllQueryArguments }}"
                UriPath: "{{ UriPath }}"
                QueryString: "{{ QueryString }}"
                Body:
                  OversizeHandling: "{{ OversizeHandling }}"
                Method: "{{ Method }}"
                JsonBody:
                  MatchPattern: "{{ MatchPattern }}"
                  MatchScope: "{{ MatchScope }}"
                  InvalidFallbackBehavior: "{{ InvalidFallbackBehavior }}"
                  OversizeHandling: "{{ OversizeHandling }}"
                Headers:
                  MatchPattern: "{{ MatchPattern }}"
                  MatchScope: "{{ MatchScope }}"
                  OversizeHandling: "{{ OversizeHandling }}"
                Cookies:
                  MatchPattern: "{{ MatchPattern }}"
                  MatchScope: "{{ MatchScope }}"
                  OversizeHandling: "{{ OversizeHandling }}"
                HeaderOrder:
                  OversizeHandling: "{{ OversizeHandling }}"
                JA3Fingerprint:
                  FallbackBehavior: "{{ FallbackBehavior }}"
                JA4Fingerprint:
                  FallbackBehavior: "{{ FallbackBehavior }}"
                UriFragment:
                  FallbackBehavior: "{{ FallbackBehavior }}"
              TextTransformations:
                - Priority: {{ Priority }}
                  Type: "{{ Type }}"
              SensitivityLevel: "{{ SensitivityLevel }}"
            XssMatchStatement:
              FieldToMatch:
                SingleHeader:
                  Name: "{{ Name }}"
                SingleQueryArgument:
                  Name: "{{ Name }}"
                AllQueryArguments: "{{ AllQueryArguments }}"
                UriPath: "{{ UriPath }}"
                QueryString: "{{ QueryString }}"
                Body:
                  OversizeHandling: "{{ OversizeHandling }}"
                Method: "{{ Method }}"
                JsonBody:
                  MatchPattern: "{{ MatchPattern }}"
                  MatchScope: "{{ MatchScope }}"
                  InvalidFallbackBehavior: "{{ InvalidFallbackBehavior }}"
                  OversizeHandling: "{{ OversizeHandling }}"
                Headers:
                  MatchPattern: "{{ MatchPattern }}"
                  MatchScope: "{{ MatchScope }}"
                  OversizeHandling: "{{ OversizeHandling }}"
                Cookies:
                  MatchPattern: "{{ MatchPattern }}"
                  MatchScope: "{{ MatchScope }}"
                  OversizeHandling: "{{ OversizeHandling }}"
                HeaderOrder:
                  OversizeHandling: "{{ OversizeHandling }}"
                JA3Fingerprint:
                  FallbackBehavior: "{{ FallbackBehavior }}"
                JA4Fingerprint:
                  FallbackBehavior: "{{ FallbackBehavior }}"
                UriFragment:
                  FallbackBehavior: "{{ FallbackBehavior }}"
              TextTransformations:
                - Priority: {{ Priority }}
                  Type: "{{ Type }}"
            SizeConstraintStatement:
              FieldToMatch:
                SingleHeader:
                  Name: "{{ Name }}"
                SingleQueryArgument:
                  Name: "{{ Name }}"
                AllQueryArguments: "{{ AllQueryArguments }}"
                UriPath: "{{ UriPath }}"
                QueryString: "{{ QueryString }}"
                Body:
                  OversizeHandling: "{{ OversizeHandling }}"
                Method: "{{ Method }}"
                JsonBody:
                  MatchPattern: "{{ MatchPattern }}"
                  MatchScope: "{{ MatchScope }}"
                  InvalidFallbackBehavior: "{{ InvalidFallbackBehavior }}"
                  OversizeHandling: "{{ OversizeHandling }}"
                Headers:
                  MatchPattern: "{{ MatchPattern }}"
                  MatchScope: "{{ MatchScope }}"
                  OversizeHandling: "{{ OversizeHandling }}"
                Cookies:
                  MatchPattern: "{{ MatchPattern }}"
                  MatchScope: "{{ MatchScope }}"
                  OversizeHandling: "{{ OversizeHandling }}"
                HeaderOrder:
                  OversizeHandling: "{{ OversizeHandling }}"
                JA3Fingerprint:
                  FallbackBehavior: "{{ FallbackBehavior }}"
                JA4Fingerprint:
                  FallbackBehavior: "{{ FallbackBehavior }}"
                UriFragment:
                  FallbackBehavior: "{{ FallbackBehavior }}"
              ComparisonOperator: "{{ ComparisonOperator }}"
              Size: {{ Size }}
              TextTransformations:
                - Priority: {{ Priority }}
                  Type: "{{ Type }}"
            GeoMatchStatement:
              CountryCodes:
                - "{{ CountryCodes }}"
              ForwardedIPConfig:
                HeaderName: "{{ HeaderName }}"
                FallbackBehavior: "{{ FallbackBehavior }}"
            RuleGroupReferenceStatement:
              ARN: "{{ ARN }}"
              ExcludedRules:
                - Name: "{{ Name }}"
              RuleActionOverrides:
                - Name: "{{ Name }}"
                  ActionToUse:
                    Block: "{{ Block }}"
                    Allow: "{{ Allow }}"
                    Count: "{{ Count }}"
                    Captcha: "{{ Captcha }}"
                    Challenge: "{{ Challenge }}"
            IPSetReferenceStatement:
              ARN: "{{ ARN }}"
              IPSetForwardedIPConfig:
                HeaderName: "{{ HeaderName }}"
                FallbackBehavior: "{{ FallbackBehavior }}"
                Position: "{{ Position }}"
            RegexPatternSetReferenceStatement:
              ARN: "{{ ARN }}"
              FieldToMatch:
                SingleHeader:
                  Name: "{{ Name }}"
                SingleQueryArgument:
                  Name: "{{ Name }}"
                AllQueryArguments: "{{ AllQueryArguments }}"
                UriPath: "{{ UriPath }}"
                QueryString: "{{ QueryString }}"
                Body:
                  OversizeHandling: "{{ OversizeHandling }}"
                Method: "{{ Method }}"
                JsonBody:
                  MatchPattern: "{{ MatchPattern }}"
                  MatchScope: "{{ MatchScope }}"
                  InvalidFallbackBehavior: "{{ InvalidFallbackBehavior }}"
                  OversizeHandling: "{{ OversizeHandling }}"
                Headers:
                  MatchPattern: "{{ MatchPattern }}"
                  MatchScope: "{{ MatchScope }}"
                  OversizeHandling: "{{ OversizeHandling }}"
                Cookies:
                  MatchPattern: "{{ MatchPattern }}"
                  MatchScope: "{{ MatchScope }}"
                  OversizeHandling: "{{ OversizeHandling }}"
                HeaderOrder:
                  OversizeHandling: "{{ OversizeHandling }}"
                JA3Fingerprint:
                  FallbackBehavior: "{{ FallbackBehavior }}"
                JA4Fingerprint:
                  FallbackBehavior: "{{ FallbackBehavior }}"
                UriFragment:
                  FallbackBehavior: "{{ FallbackBehavior }}"
              TextTransformations:
                - Priority: {{ Priority }}
                  Type: "{{ Type }}"
            RateBasedStatement:
              Limit: {{ Limit }}
              EvaluationWindowSec: {{ EvaluationWindowSec }}
              AggregateKeyType: "{{ AggregateKeyType }}"
              ScopeDownStatement:
                ByteMatchStatement:
                  SearchString: "{{ SearchString }}"
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                  PositionalConstraint: "{{ PositionalConstraint }}"
                SqliMatchStatement:
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                  SensitivityLevel: "{{ SensitivityLevel }}"
                XssMatchStatement:
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                SizeConstraintStatement:
                  FieldToMatch: "{{ FieldToMatch }}"
                  ComparisonOperator: "{{ ComparisonOperator }}"
                  Size: {{ Size }}
                  TextTransformations: "{{ TextTransformations }}"
                GeoMatchStatement:
                  CountryCodes: "{{ CountryCodes }}"
                  ForwardedIPConfig: "{{ ForwardedIPConfig }}"
                RuleGroupReferenceStatement:
                  ARN: "{{ ARN }}"
                  ExcludedRules: "{{ ExcludedRules }}"
                  RuleActionOverrides: "{{ RuleActionOverrides }}"
                IPSetReferenceStatement:
                  ARN: "{{ ARN }}"
                  IPSetForwardedIPConfig: "{{ IPSetForwardedIPConfig }}"
                RegexPatternSetReferenceStatement:
                  ARN: "{{ ARN }}"
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                RateBasedStatement:
                  Limit: {{ Limit }}
                  EvaluationWindowSec: {{ EvaluationWindowSec }}
                  AggregateKeyType: "{{ AggregateKeyType }}"
                  ScopeDownStatement: "{{ ScopeDownStatement }}"
                  ForwardedIPConfig: "{{ ForwardedIPConfig }}"
                  CustomKeys: "{{ CustomKeys }}"
                AndStatement:
                  Statements: "{{ Statements }}"
                OrStatement:
                  Statements: "{{ Statements }}"
                NotStatement:
                  Statement: "{{ Statement }}"
                ManagedRuleGroupStatement:
                  VendorName: "{{ VendorName }}"
                  Name: "{{ Name }}"
                  Version: "{{ Version }}"
                  ExcludedRules: "{{ ExcludedRules }}"
                  ScopeDownStatement: "{{ ScopeDownStatement }}"
                  ManagedRuleGroupConfigs: "{{ ManagedRuleGroupConfigs }}"
                  RuleActionOverrides: "{{ RuleActionOverrides }}"
                LabelMatchStatement:
                  Scope: "{{ Scope }}"
                  Key: "{{ Key }}"
                RegexMatchStatement:
                  RegexString: "{{ RegexString }}"
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                AsnMatchStatement:
                  AsnList: "{{ AsnList }}"
                  ForwardedIPConfig: "{{ ForwardedIPConfig }}"
              ForwardedIPConfig:
                HeaderName: "{{ HeaderName }}"
                FallbackBehavior: "{{ FallbackBehavior }}"
              CustomKeys:
                - Header:
                    Name: "{{ Name }}"
                    TextTransformations: "{{ TextTransformations }}"
                  Cookie:
                    Name: "{{ Name }}"
                    TextTransformations: "{{ TextTransformations }}"
                  QueryArgument:
                    Name: "{{ Name }}"
                    TextTransformations: "{{ TextTransformations }}"
                  QueryString:
                    TextTransformations: "{{ TextTransformations }}"
                  HTTPMethod: "{{ HTTPMethod }}"
                  ForwardedIP: "{{ ForwardedIP }}"
                  IP: "{{ IP }}"
                  LabelNamespace:
                    Namespace: "{{ Namespace }}"
                  UriPath:
                    TextTransformations: "{{ TextTransformations }}"
                  JA3Fingerprint:
                    FallbackBehavior: "{{ FallbackBehavior }}"
                  JA4Fingerprint:
                    FallbackBehavior: "{{ FallbackBehavior }}"
                  ASN: "{{ ASN }}"
            AndStatement:
              Statements:
                - ByteMatchStatement:
                    SearchString: "{{ SearchString }}"
                    FieldToMatch: "{{ FieldToMatch }}"
                    TextTransformations: "{{ TextTransformations }}"
                    PositionalConstraint: "{{ PositionalConstraint }}"
                  SqliMatchStatement:
                    FieldToMatch: "{{ FieldToMatch }}"
                    TextTransformations: "{{ TextTransformations }}"
                    SensitivityLevel: "{{ SensitivityLevel }}"
                  XssMatchStatement:
                    FieldToMatch: "{{ FieldToMatch }}"
                    TextTransformations: "{{ TextTransformations }}"
                  SizeConstraintStatement:
                    FieldToMatch: "{{ FieldToMatch }}"
                    ComparisonOperator: "{{ ComparisonOperator }}"
                    Size: {{ Size }}
                    TextTransformations: "{{ TextTransformations }}"
                  GeoMatchStatement:
                    CountryCodes: "{{ CountryCodes }}"
                    ForwardedIPConfig: "{{ ForwardedIPConfig }}"
                  RuleGroupReferenceStatement:
                    ARN: "{{ ARN }}"
                    ExcludedRules: "{{ ExcludedRules }}"
                    RuleActionOverrides: "{{ RuleActionOverrides }}"
                  IPSetReferenceStatement:
                    ARN: "{{ ARN }}"
                    IPSetForwardedIPConfig: "{{ IPSetForwardedIPConfig }}"
                  RegexPatternSetReferenceStatement:
                    ARN: "{{ ARN }}"
                    FieldToMatch: "{{ FieldToMatch }}"
                    TextTransformations: "{{ TextTransformations }}"
                  RateBasedStatement:
                    Limit: {{ Limit }}
                    EvaluationWindowSec: {{ EvaluationWindowSec }}
                    AggregateKeyType: "{{ AggregateKeyType }}"
                    ScopeDownStatement: "{{ ScopeDownStatement }}"
                    ForwardedIPConfig: "{{ ForwardedIPConfig }}"
                    CustomKeys: "{{ CustomKeys }}"
                  AndStatement:
                    Statements: "{{ Statements }}"
                  OrStatement:
                    Statements: "{{ Statements }}"
                  NotStatement:
                    Statement: "{{ Statement }}"
                  ManagedRuleGroupStatement:
                    VendorName: "{{ VendorName }}"
                    Name: "{{ Name }}"
                    Version: "{{ Version }}"
                    ExcludedRules: "{{ ExcludedRules }}"
                    ScopeDownStatement: "{{ ScopeDownStatement }}"
                    ManagedRuleGroupConfigs: "{{ ManagedRuleGroupConfigs }}"
                    RuleActionOverrides: "{{ RuleActionOverrides }}"
                  LabelMatchStatement:
                    Scope: "{{ Scope }}"
                    Key: "{{ Key }}"
                  RegexMatchStatement:
                    RegexString: "{{ RegexString }}"
                    FieldToMatch: "{{ FieldToMatch }}"
                    TextTransformations: "{{ TextTransformations }}"
                  AsnMatchStatement:
                    AsnList: "{{ AsnList }}"
                    ForwardedIPConfig: "{{ ForwardedIPConfig }}"
            OrStatement:
              Statements:
                - ByteMatchStatement:
                    SearchString: "{{ SearchString }}"
                    FieldToMatch: "{{ FieldToMatch }}"
                    TextTransformations: "{{ TextTransformations }}"
                    PositionalConstraint: "{{ PositionalConstraint }}"
                  SqliMatchStatement:
                    FieldToMatch: "{{ FieldToMatch }}"
                    TextTransformations: "{{ TextTransformations }}"
                    SensitivityLevel: "{{ SensitivityLevel }}"
                  XssMatchStatement:
                    FieldToMatch: "{{ FieldToMatch }}"
                    TextTransformations: "{{ TextTransformations }}"
                  SizeConstraintStatement:
                    FieldToMatch: "{{ FieldToMatch }}"
                    ComparisonOperator: "{{ ComparisonOperator }}"
                    Size: {{ Size }}
                    TextTransformations: "{{ TextTransformations }}"
                  GeoMatchStatement:
                    CountryCodes: "{{ CountryCodes }}"
                    ForwardedIPConfig: "{{ ForwardedIPConfig }}"
                  RuleGroupReferenceStatement:
                    ARN: "{{ ARN }}"
                    ExcludedRules: "{{ ExcludedRules }}"
                    RuleActionOverrides: "{{ RuleActionOverrides }}"
                  IPSetReferenceStatement:
                    ARN: "{{ ARN }}"
                    IPSetForwardedIPConfig: "{{ IPSetForwardedIPConfig }}"
                  RegexPatternSetReferenceStatement:
                    ARN: "{{ ARN }}"
                    FieldToMatch: "{{ FieldToMatch }}"
                    TextTransformations: "{{ TextTransformations }}"
                  RateBasedStatement:
                    Limit: {{ Limit }}
                    EvaluationWindowSec: {{ EvaluationWindowSec }}
                    AggregateKeyType: "{{ AggregateKeyType }}"
                    ScopeDownStatement: "{{ ScopeDownStatement }}"
                    ForwardedIPConfig: "{{ ForwardedIPConfig }}"
                    CustomKeys: "{{ CustomKeys }}"
                  AndStatement:
                    Statements: "{{ Statements }}"
                  OrStatement:
                    Statements: "{{ Statements }}"
                  NotStatement:
                    Statement: "{{ Statement }}"
                  ManagedRuleGroupStatement:
                    VendorName: "{{ VendorName }}"
                    Name: "{{ Name }}"
                    Version: "{{ Version }}"
                    ExcludedRules: "{{ ExcludedRules }}"
                    ScopeDownStatement: "{{ ScopeDownStatement }}"
                    ManagedRuleGroupConfigs: "{{ ManagedRuleGroupConfigs }}"
                    RuleActionOverrides: "{{ RuleActionOverrides }}"
                  LabelMatchStatement:
                    Scope: "{{ Scope }}"
                    Key: "{{ Key }}"
                  RegexMatchStatement:
                    RegexString: "{{ RegexString }}"
                    FieldToMatch: "{{ FieldToMatch }}"
                    TextTransformations: "{{ TextTransformations }}"
                  AsnMatchStatement:
                    AsnList: "{{ AsnList }}"
                    ForwardedIPConfig: "{{ ForwardedIPConfig }}"
            NotStatement:
              Statement:
                ByteMatchStatement:
                  SearchString: "{{ SearchString }}"
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                  PositionalConstraint: "{{ PositionalConstraint }}"
                SqliMatchStatement:
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                  SensitivityLevel: "{{ SensitivityLevel }}"
                XssMatchStatement:
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                SizeConstraintStatement:
                  FieldToMatch: "{{ FieldToMatch }}"
                  ComparisonOperator: "{{ ComparisonOperator }}"
                  Size: {{ Size }}
                  TextTransformations: "{{ TextTransformations }}"
                GeoMatchStatement:
                  CountryCodes: "{{ CountryCodes }}"
                  ForwardedIPConfig: "{{ ForwardedIPConfig }}"
                RuleGroupReferenceStatement:
                  ARN: "{{ ARN }}"
                  ExcludedRules: "{{ ExcludedRules }}"
                  RuleActionOverrides: "{{ RuleActionOverrides }}"
                IPSetReferenceStatement:
                  ARN: "{{ ARN }}"
                  IPSetForwardedIPConfig: "{{ IPSetForwardedIPConfig }}"
                RegexPatternSetReferenceStatement:
                  ARN: "{{ ARN }}"
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                RateBasedStatement:
                  Limit: {{ Limit }}
                  EvaluationWindowSec: {{ EvaluationWindowSec }}
                  AggregateKeyType: "{{ AggregateKeyType }}"
                  ScopeDownStatement: "{{ ScopeDownStatement }}"
                  ForwardedIPConfig: "{{ ForwardedIPConfig }}"
                  CustomKeys: "{{ CustomKeys }}"
                AndStatement:
                  Statements: "{{ Statements }}"
                OrStatement:
                  Statements: "{{ Statements }}"
                NotStatement:
                  Statement: "{{ Statement }}"
                ManagedRuleGroupStatement:
                  VendorName: "{{ VendorName }}"
                  Name: "{{ Name }}"
                  Version: "{{ Version }}"
                  ExcludedRules: "{{ ExcludedRules }}"
                  ScopeDownStatement: "{{ ScopeDownStatement }}"
                  ManagedRuleGroupConfigs: "{{ ManagedRuleGroupConfigs }}"
                  RuleActionOverrides: "{{ RuleActionOverrides }}"
                LabelMatchStatement:
                  Scope: "{{ Scope }}"
                  Key: "{{ Key }}"
                RegexMatchStatement:
                  RegexString: "{{ RegexString }}"
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                AsnMatchStatement:
                  AsnList: "{{ AsnList }}"
                  ForwardedIPConfig: "{{ ForwardedIPConfig }}"
            ManagedRuleGroupStatement:
              VendorName: "{{ VendorName }}"
              Name: "{{ Name }}"
              Version: "{{ Version }}"
              ExcludedRules:
                - Name: "{{ Name }}"
              ScopeDownStatement:
                ByteMatchStatement:
                  SearchString: "{{ SearchString }}"
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                  PositionalConstraint: "{{ PositionalConstraint }}"
                SqliMatchStatement:
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                  SensitivityLevel: "{{ SensitivityLevel }}"
                XssMatchStatement:
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                SizeConstraintStatement:
                  FieldToMatch: "{{ FieldToMatch }}"
                  ComparisonOperator: "{{ ComparisonOperator }}"
                  Size: {{ Size }}
                  TextTransformations: "{{ TextTransformations }}"
                GeoMatchStatement:
                  CountryCodes: "{{ CountryCodes }}"
                  ForwardedIPConfig: "{{ ForwardedIPConfig }}"
                RuleGroupReferenceStatement:
                  ARN: "{{ ARN }}"
                  ExcludedRules: "{{ ExcludedRules }}"
                  RuleActionOverrides: "{{ RuleActionOverrides }}"
                IPSetReferenceStatement:
                  ARN: "{{ ARN }}"
                  IPSetForwardedIPConfig: "{{ IPSetForwardedIPConfig }}"
                RegexPatternSetReferenceStatement:
                  ARN: "{{ ARN }}"
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                RateBasedStatement:
                  Limit: {{ Limit }}
                  EvaluationWindowSec: {{ EvaluationWindowSec }}
                  AggregateKeyType: "{{ AggregateKeyType }}"
                  ScopeDownStatement: "{{ ScopeDownStatement }}"
                  ForwardedIPConfig: "{{ ForwardedIPConfig }}"
                  CustomKeys: "{{ CustomKeys }}"
                AndStatement:
                  Statements: "{{ Statements }}"
                OrStatement:
                  Statements: "{{ Statements }}"
                NotStatement:
                  Statement: "{{ Statement }}"
                ManagedRuleGroupStatement:
                  VendorName: "{{ VendorName }}"
                  Name: "{{ Name }}"
                  Version: "{{ Version }}"
                  ExcludedRules: "{{ ExcludedRules }}"
                  ScopeDownStatement: "{{ ScopeDownStatement }}"
                  ManagedRuleGroupConfigs: "{{ ManagedRuleGroupConfigs }}"
                  RuleActionOverrides: "{{ RuleActionOverrides }}"
                LabelMatchStatement:
                  Scope: "{{ Scope }}"
                  Key: "{{ Key }}"
                RegexMatchStatement:
                  RegexString: "{{ RegexString }}"
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                AsnMatchStatement:
                  AsnList: "{{ AsnList }}"
                  ForwardedIPConfig: "{{ ForwardedIPConfig }}"
              ManagedRuleGroupConfigs:
                - LoginPath: "{{ LoginPath }}"
                  PayloadType: "{{ PayloadType }}"
                  UsernameField:
                    Identifier: "{{ Identifier }}"
                  PasswordField:
                    Identifier: "{{ Identifier }}"
                  AWSManagedRulesBotControlRuleSet:
                    InspectionLevel: "{{ InspectionLevel }}"
                    EnableMachineLearning: {{ EnableMachineLearning }}
                  AWSManagedRulesATPRuleSet:
                    LoginPath: "{{ LoginPath }}"
                    RequestInspection: "{{ RequestInspection }}"
                    ResponseInspection: "{{ ResponseInspection }}"
                    EnableRegexInPath: {{ EnableRegexInPath }}
                  AWSManagedRulesACFPRuleSet:
                    CreationPath: "{{ CreationPath }}"
                    RegistrationPagePath: "{{ RegistrationPagePath }}"
                    RequestInspection: "{{ RequestInspection }}"
                    ResponseInspection: "{{ ResponseInspection }}"
                    EnableRegexInPath: {{ EnableRegexInPath }}
                  AWSManagedRulesAntiDDoSRuleSet:
                    ClientSideActionConfig: "{{ ClientSideActionConfig }}"
                    SensitivityToBlock: "{{ SensitivityToBlock }}"
              RuleActionOverrides:
                - Name: "{{ Name }}"
                  ActionToUse:
                    Block: "{{ Block }}"
                    Allow: "{{ Allow }}"
                    Count: "{{ Count }}"
                    Captcha: "{{ Captcha }}"
                    Challenge: "{{ Challenge }}"
            LabelMatchStatement:
              Scope: "{{ Scope }}"
              Key: "{{ Key }}"
            RegexMatchStatement:
              RegexString: "{{ RegexString }}"
              FieldToMatch:
                SingleHeader:
                  Name: "{{ Name }}"
                SingleQueryArgument:
                  Name: "{{ Name }}"
                AllQueryArguments: "{{ AllQueryArguments }}"
                UriPath: "{{ UriPath }}"
                QueryString: "{{ QueryString }}"
                Body:
                  OversizeHandling: "{{ OversizeHandling }}"
                Method: "{{ Method }}"
                JsonBody:
                  MatchPattern: "{{ MatchPattern }}"
                  MatchScope: "{{ MatchScope }}"
                  InvalidFallbackBehavior: "{{ InvalidFallbackBehavior }}"
                  OversizeHandling: "{{ OversizeHandling }}"
                Headers:
                  MatchPattern: "{{ MatchPattern }}"
                  MatchScope: "{{ MatchScope }}"
                  OversizeHandling: "{{ OversizeHandling }}"
                Cookies:
                  MatchPattern: "{{ MatchPattern }}"
                  MatchScope: "{{ MatchScope }}"
                  OversizeHandling: "{{ OversizeHandling }}"
                HeaderOrder:
                  OversizeHandling: "{{ OversizeHandling }}"
                JA3Fingerprint:
                  FallbackBehavior: "{{ FallbackBehavior }}"
                JA4Fingerprint:
                  FallbackBehavior: "{{ FallbackBehavior }}"
                UriFragment:
                  FallbackBehavior: "{{ FallbackBehavior }}"
              TextTransformations:
                - Priority: {{ Priority }}
                  Type: "{{ Type }}"
            AsnMatchStatement:
              AsnList:
                - {{ AsnList }}
              ForwardedIPConfig:
                HeaderName: "{{ HeaderName }}"
                FallbackBehavior: "{{ FallbackBehavior }}"
          Action:
            Block:
              CustomResponse:
                ResponseCode: {{ ResponseCode }}
                CustomResponseBodyKey: "{{ CustomResponseBodyKey }}"
                ResponseHeaders:
                  - Name: "{{ Name }}"
                    Value: "{{ Value }}"
            Allow:
              CustomRequestHandling:
                InsertHeaders:
                  - Name: "{{ Name }}"
                    Value: "{{ Value }}"
            Count:
              CustomRequestHandling:
                InsertHeaders:
                  - Name: "{{ Name }}"
                    Value: "{{ Value }}"
            Captcha:
              CustomRequestHandling:
                InsertHeaders:
                  - Name: "{{ Name }}"
                    Value: "{{ Value }}"
            Challenge:
              CustomRequestHandling:
                InsertHeaders:
                  - Name: "{{ Name }}"
                    Value: "{{ Value }}"
          OverrideAction:
            Count:
              CustomRequestHandling:
                InsertHeaders:
                  - Name: "{{ Name }}"
                    Value: "{{ Value }}"
            None: "{{ None }}"
          RuleLabels: "{{ RuleLabels }}"
          VisibilityConfig:
            SampledRequestsEnabled: {{ SampledRequestsEnabled }}
            CloudWatchMetricsEnabled: {{ CloudWatchMetricsEnabled }}
            MetricName: "{{ MetricName }}"
          CaptchaConfig:
            ImmunityTimeProperty:
              ImmunityTime: {{ ImmunityTime }}
          ChallengeConfig:
            ImmunityTimeProperty:
              ImmunityTime: {{ ImmunityTime }}
    - name: VisibilityConfig
      description: |
        Defines and enables Amazon CloudWatch metrics and web request sample collection.
      value:
        SampledRequestsEnabled: {{ SampledRequestsEnabled }}
        CloudWatchMetricsEnabled: {{ CloudWatchMetricsEnabled }}
        MetricName: "{{ MetricName }}"
    - name: Tags
      description: |
        An array of key:value pairs to associate with the resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: CustomResponseBodies
      value: "{{ CustomResponseBodies }}"
      description: |
        A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the rule group, and then use them in the rules that you define in the rule group. For information about customizing web requests and responses, see Customizing web requests and responses in WAF in the WAF Developer Guide. For information about the limits on count and size for custom request and response settings, see WAF quotas in the WAF Developer Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_rule_group"
    values={[
        { label: 'update_rule_group', value: 'update_rule_group' }
    ]}
>
<TabItem value="update_rule_group">

Updates the specified RuleGroup. This operation completely replaces the mutable specifications that you already have for the rule group with the ones that you provide to this call. To modify a rule group, do the following: Retrieve it by calling GetRuleGroup Update its settings as needed Provide the complete rule group specification to this call A rule group defines a collection of rules to inspect and control web requests that you can use in a WebACL. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. Temporary inconsistencies during updates When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes. The following are examples of the temporary inconsistencies that you might notice during change propagation: After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable. After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another. After you change a rule action setting, you might see the old action in some places and the new action in others. After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another.

```sql
UPDATE aws.wafv2.rule_groups
SET 
Name = '{{ Name }}',
Scope = '{{ Scope }}',
Id = '{{ Id }}',
Description = '{{ Description }}',
Rules = '{{ Rules }}',
VisibilityConfig = '{{ VisibilityConfig }}',
LockToken = '{{ LockToken }}',
CustomResponseBodies = '{{ CustomResponseBodies }}'
WHERE 
region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
AND Scope = '{{ Scope }}' --required
AND Id = '{{ Id }}' --required
AND VisibilityConfig = '{{ VisibilityConfig }}' --required
AND LockToken = '{{ LockToken }}' --required
RETURNING
NextLockToken;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rule_group"
    values={[
        { label: 'delete_rule_group', value: 'delete_rule_group' },
        { label: 'delete_firewall_manager_rule_groups', value: 'delete_firewall_manager_rule_groups' }
    ]}
>
<TabItem value="delete_rule_group">

Deletes the specified RuleGroup.

```sql
DELETE FROM aws.wafv2.rule_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_firewall_manager_rule_groups">

Deletes all rule groups that are managed by Firewall Manager from the specified WebACL. You can only use this if ManagedByFirewallManager and RetrofittedByFirewallManager are both false in the web ACL.

```sql
DELETE FROM aws.wafv2.rule_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
