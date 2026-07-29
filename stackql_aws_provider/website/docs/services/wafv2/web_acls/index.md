--- 
title: web_acls
hide_title: false
hide_table_of_contents: false
keywords:
  - web_acls
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

Creates, updates, deletes, gets or lists a <code>web_acls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="web_acls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wafv2.web_acls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_web_acl"
    values={[
        { label: 'get_web_acl', value: 'get_web_acl' }
    ]}
>
<TabItem value="get_web_acl">

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
    <td><CopyableCode code="application_integration_url" /></td>
    <td><code>string</code></td>
    <td>The URL to use in SDK integrations with Amazon Web Services managed rule groups. For example, you can use the integration SDKs with the account takeover prevention managed rule group AWSManagedRulesATPRuleSet and the account creation fraud prevention managed rule group AWSManagedRulesACFPRuleSet. This is only populated if you are using a rule group in your web ACL that integrates with your applications in this way. For more information, see WAF client application integration in the WAF Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="lock_token" /></td>
    <td><code>string</code></td>
    <td>A token used for optimistic locking. WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-(?:&#91;0-9a-f&#93;&#123;4&#125;-)&#123;3&#125;&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="web_acl" /></td>
    <td><code>object</code></td>
    <td>The web ACL specification. You can modify the settings in this web ACL and use it to update this web ACL or create a new one.</td>
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
    <td><a href="#get_web_acl"><CopyableCode code="get_web_acl" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified WebACL.</td>
</tr>
<tr>
    <td><a href="#create_web_acl"><CopyableCode code="create_web_acl" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Scope"><code>Scope</code></a>, <a href="#parameter-DefaultAction"><code>DefaultAction</code></a>, <a href="#parameter-VisibilityConfig"><code>VisibilityConfig</code></a></td>
    <td></td>
    <td>Creates a WebACL per the specifications provided. A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has a statement that defines what to look for in web requests and an action that WAF applies to requests that match the statement. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types Rule, RuleGroup, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resource types include Amazon CloudFront distribution, Amazon API Gateway REST API, Application Load Balancer, AppSync GraphQL API, Amazon Cognito user pool, App Runner service, Amplify application, and Amazon Web Services Verified Access instance.</td>
</tr>
<tr>
    <td><a href="#update_web_acl"><CopyableCode code="update_web_acl" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Scope"><code>Scope</code></a>, <a href="#parameter-Id"><code>Id</code></a>, <a href="#parameter-DefaultAction"><code>DefaultAction</code></a>, <a href="#parameter-VisibilityConfig"><code>VisibilityConfig</code></a>, <a href="#parameter-LockToken"><code>LockToken</code></a></td>
    <td></td>
    <td>Updates the specified WebACL. While updating a web ACL, WAF provides continuous coverage to the resources that you have associated with the web ACL. This operation completely replaces the mutable specifications that you already have for the web ACL with the ones that you provide to this call. To modify a web ACL, do the following: Retrieve it by calling GetWebACL Update its settings as needed Provide the complete web ACL specification to this call A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has a statement that defines what to look for in web requests and an action that WAF applies to requests that match the statement. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types Rule, RuleGroup, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resource types include Amazon CloudFront distribution, Amazon API Gateway REST API, Application Load Balancer, AppSync GraphQL API, Amazon Cognito user pool, App Runner service, Amplify application, and Amazon Web Services Verified Access instance. Temporary inconsistencies during updates When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes. The following are examples of the temporary inconsistencies that you might notice during change propagation: After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable. After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another. After you change a rule action setting, you might see the old action in some places and the new action in others. After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another.</td>
</tr>
<tr>
    <td><a href="#associate_web_acl"><CopyableCode code="associate_web_acl" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WebACLArn"><code>WebACLArn</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Associates a web ACL with a resource, to protect the resource. Use this for all resource types except for Amazon CloudFront distributions. For Amazon CloudFront, call UpdateDistribution for the distribution and provide the Amazon Resource Name (ARN) of the web ACL in the web ACL ID. For information, see UpdateDistribution in the Amazon CloudFront Developer Guide. Required permissions for customer-managed IAM policies This call requires permissions that are specific to the protected resource type. For details, see Permissions for AssociateWebACL in the WAF Developer Guide. Temporary inconsistencies during updates When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes. The following are examples of the temporary inconsistencies that you might notice during change propagation: After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable. After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another. After you change a rule action setting, you might see the old action in some places and the new action in others. After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another.</td>
</tr>
<tr>
    <td><a href="#disassociate_web_acl"><CopyableCode code="disassociate_web_acl" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Disassociates the specified resource from its web ACL association, if it has one. Use this for all resource types except for Amazon CloudFront distributions. For Amazon CloudFront, call UpdateDistribution for the distribution and provide an empty web ACL ID. For information, see UpdateDistribution in the Amazon CloudFront API Reference. Required permissions for customer-managed IAM policies This call requires permissions that are specific to the protected resource type. For details, see Permissions for DisassociateWebACL in the WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_web_acl"><CopyableCode code="delete_web_acl" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified WebACL. You can only use this if ManagedByFirewallManager is false in the web ACL. Before deleting any web ACL, first disassociate it from all resources. To retrieve a list of the resources that are associated with a web ACL, use the following calls: For Amazon CloudFront distributions, use the CloudFront call ListDistributionsByWebACLId. For information, see ListDistributionsByWebACLId in the Amazon CloudFront API Reference. For all other resources, call ListResourcesForWebACL. To disassociate a resource from a web ACL, use the following calls: For Amazon CloudFront distributions, provide an empty web ACL ID in the CloudFront call UpdateDistribution. For information, see UpdateDistribution in the Amazon CloudFront API Reference. For all other resources, call DisassociateWebACL.</td>
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
    defaultValue="get_web_acl"
    values={[
        { label: 'get_web_acl', value: 'get_web_acl' }
    ]}
>
<TabItem value="get_web_acl">

Retrieves the specified WebACL.

```sql
SELECT
application_integration_url,
lock_token,
web_acl
FROM aws.wafv2.web_acls
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_web_acl"
    values={[
        { label: 'create_web_acl', value: 'create_web_acl' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_web_acl">

Creates a WebACL per the specifications provided. A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has a statement that defines what to look for in web requests and an action that WAF applies to requests that match the statement. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types Rule, RuleGroup, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resource types include Amazon CloudFront distribution, Amazon API Gateway REST API, Application Load Balancer, AppSync GraphQL API, Amazon Cognito user pool, App Runner service, Amplify application, and Amazon Web Services Verified Access instance.

```sql
INSERT INTO aws.wafv2.web_acls (
Name,
Scope,
DefaultAction,
Description,
Rules,
VisibilityConfig,
DataProtectionConfig,
Tags,
CustomResponseBodies,
CaptchaConfig,
ChallengeConfig,
TokenDomains,
AssociationConfig,
OnSourceDDoSProtectionConfig,
ApplicationConfig,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ Scope }}' /* required */,
'{{ DefaultAction }}' /* required */,
'{{ Description }}',
'{{ Rules }}',
'{{ VisibilityConfig }}' /* required */,
'{{ DataProtectionConfig }}',
'{{ Tags }}',
'{{ CustomResponseBodies }}',
'{{ CaptchaConfig }}',
'{{ ChallengeConfig }}',
'{{ TokenDomains }}',
'{{ AssociationConfig }}',
'{{ OnSourceDDoSProtectionConfig }}',
'{{ ApplicationConfig }}',
'{{ region }}'
RETURNING
summary
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: web_acls
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the web_acls resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the web ACL. You cannot change the name of a web ACL after you create it.
    - name: Scope
      value: "{{ Scope }}"
      description: |
        Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use CLOUDFRONT. To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1. API and SDKs - For all calls, use the Region endpoint us-east-1.
      valid_values: ['CLOUDFRONT', 'REGIONAL']
    - name: DefaultAction
      description: |
        The action to perform if none of the Rules contained in the WebACL match.
      value:
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
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the web ACL that helps with identification.
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
    - name: DataProtectionConfig
      description: |
        Specifies data protection to apply to the web request data for the web ACL. This is a web ACL level data protection option. The data protection that you configure for the web ACL alters the data that's available for any other data collection activity, including your WAF logging destinations, web ACL request sampling, and Amazon Security Lake data collection and management. Your other option for data protection is in the logging configuration, which only affects logging.
      value:
        DataProtections:
          - Field:
              FieldType: "{{ FieldType }}"
              FieldKeys:
                - "{{ FieldKeys }}"
            Action: "{{ Action }}"
            ExcludeRuleMatchDetails: {{ ExcludeRuleMatchDetails }}
            ExcludeRateBasedDetails: {{ ExcludeRateBasedDetails }}
    - name: Tags
      description: |
        An array of key:value pairs to associate with the resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: CustomResponseBodies
      value: "{{ CustomResponseBodies }}"
      description: |
        A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL. For information about customizing web requests and responses, see Customizing web requests and responses in WAF in the WAF Developer Guide. For information about the limits on count and size for custom request and response settings, see WAF quotas in the WAF Developer Guide.
    - name: CaptchaConfig
      description: |
        Specifies how WAF should handle CAPTCHA evaluations for rules that don't have their own CaptchaConfig settings. If you don't specify this, WAF uses its default settings for CaptchaConfig.
      value:
        ImmunityTimeProperty:
          ImmunityTime: {{ ImmunityTime }}
    - name: ChallengeConfig
      description: |
        Specifies how WAF should handle challenge evaluations for rules that don't have their own ChallengeConfig settings. If you don't specify this, WAF uses its default settings for ChallengeConfig.
      value:
        ImmunityTimeProperty:
          ImmunityTime: {{ ImmunityTime }}
    - name: TokenDomains
      value:
        - "{{ TokenDomains }}"
      description: |
        Specifies the domains that WAF should accept in a web request token. This enables the use of tokens across multiple protected websites. When WAF provides a token, it uses the domain of the Amazon Web Services resource that the web ACL is protecting. If you don't specify a list of token domains, WAF accepts tokens only for the domain of the protected resource. With a token domain list, WAF accepts the resource's host domain plus all domains in the token domain list, including their prefixed subdomains. Example JSON: "TokenDomains": { "mywebsite.com", "myotherwebsite.com" } Public suffixes aren't allowed. For example, you can't use gov.au or co.uk as token domains.
    - name: AssociationConfig
      description: |
        Specifies custom configurations for the associations between the web ACL and protected resources. Use this to customize the maximum size of the request body that your protected resources forward to WAF for inspection. You can customize this setting for CloudFront, API Gateway, Amazon Cognito, App Runner, or Verified Access resources. The default setting is 16 KB (16,384 bytes). You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see WAF Pricing. For Application Load Balancer and AppSync, the limit is fixed at 8 KB (8,192 bytes).
      value:
        RequestBody: "{{ RequestBody }}"
    - name: OnSourceDDoSProtectionConfig
      description: |
        Specifies the type of DDoS protection to apply to web request data for a web ACL. For most scenarios, it is recommended to use the default protection level, ACTIVE_UNDER_DDOS. If a web ACL is associated with multiple Application Load Balancers, the changes you make to DDoS protection in that web ACL will apply to all associated Application Load Balancers.
      value:
        ALBLowReputationMode: "{{ ALBLowReputationMode }}"
    - name: ApplicationConfig
      description: |
        Configures the ability for the WAF console to store and retrieve application attributes during the web ACL creation process. Application attributes help WAF give recommendations for protection packs.
      value:
        Attributes:
          - Name: "{{ Name }}"
            Values: "{{ Values }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_web_acl"
    values={[
        { label: 'update_web_acl', value: 'update_web_acl' },
        { label: 'associate_web_acl', value: 'associate_web_acl' },
        { label: 'disassociate_web_acl', value: 'disassociate_web_acl' }
    ]}
>
<TabItem value="update_web_acl">

Updates the specified WebACL. While updating a web ACL, WAF provides continuous coverage to the resources that you have associated with the web ACL. This operation completely replaces the mutable specifications that you already have for the web ACL with the ones that you provide to this call. To modify a web ACL, do the following: Retrieve it by calling GetWebACL Update its settings as needed Provide the complete web ACL specification to this call A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has a statement that defines what to look for in web requests and an action that WAF applies to requests that match the statement. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types Rule, RuleGroup, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resource types include Amazon CloudFront distribution, Amazon API Gateway REST API, Application Load Balancer, AppSync GraphQL API, Amazon Cognito user pool, App Runner service, Amplify application, and Amazon Web Services Verified Access instance. Temporary inconsistencies during updates When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes. The following are examples of the temporary inconsistencies that you might notice during change propagation: After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable. After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another. After you change a rule action setting, you might see the old action in some places and the new action in others. After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another.

```sql
UPDATE aws.wafv2.web_acls
SET 
Name = '{{ Name }}',
Scope = '{{ Scope }}',
Id = '{{ Id }}',
DefaultAction = '{{ DefaultAction }}',
Description = '{{ Description }}',
Rules = '{{ Rules }}',
VisibilityConfig = '{{ VisibilityConfig }}',
DataProtectionConfig = '{{ DataProtectionConfig }}',
LockToken = '{{ LockToken }}',
CustomResponseBodies = '{{ CustomResponseBodies }}',
CaptchaConfig = '{{ CaptchaConfig }}',
ChallengeConfig = '{{ ChallengeConfig }}',
TokenDomains = '{{ TokenDomains }}',
AssociationConfig = '{{ AssociationConfig }}',
OnSourceDDoSProtectionConfig = '{{ OnSourceDDoSProtectionConfig }}',
ApplicationConfig = '{{ ApplicationConfig }}'
WHERE 
region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
AND Scope = '{{ Scope }}' --required
AND Id = '{{ Id }}' --required
AND DefaultAction = '{{ DefaultAction }}' --required
AND VisibilityConfig = '{{ VisibilityConfig }}' --required
AND LockToken = '{{ LockToken }}' --required
RETURNING
next_lock_token;
```
</TabItem>
<TabItem value="associate_web_acl">

Associates a web ACL with a resource, to protect the resource. Use this for all resource types except for Amazon CloudFront distributions. For Amazon CloudFront, call UpdateDistribution for the distribution and provide the Amazon Resource Name (ARN) of the web ACL in the web ACL ID. For information, see UpdateDistribution in the Amazon CloudFront Developer Guide. Required permissions for customer-managed IAM policies This call requires permissions that are specific to the protected resource type. For details, see Permissions for AssociateWebACL in the WAF Developer Guide. Temporary inconsistencies during updates When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes. The following are examples of the temporary inconsistencies that you might notice during change propagation: After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable. After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another. After you change a rule action setting, you might see the old action in some places and the new action in others. After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another.

```sql
UPDATE aws.wafv2.web_acls
SET 
WebACLArn = '{{ WebACLArn }}',
ResourceArn = '{{ ResourceArn }}'
WHERE 
region = '{{ region }}' --required
AND WebACLArn = '{{ WebACLArn }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required;
```
</TabItem>
<TabItem value="disassociate_web_acl">

Disassociates the specified resource from its web ACL association, if it has one. Use this for all resource types except for Amazon CloudFront distributions. For Amazon CloudFront, call UpdateDistribution for the distribution and provide an empty web ACL ID. For information, see UpdateDistribution in the Amazon CloudFront API Reference. Required permissions for customer-managed IAM policies This call requires permissions that are specific to the protected resource type. For details, see Permissions for DisassociateWebACL in the WAF Developer Guide.

```sql
UPDATE aws.wafv2.web_acls
SET 
ResourceArn = '{{ ResourceArn }}'
WHERE 
region = '{{ region }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_web_acl"
    values={[
        { label: 'delete_web_acl', value: 'delete_web_acl' }
    ]}
>
<TabItem value="delete_web_acl">

Deletes the specified WebACL. You can only use this if ManagedByFirewallManager is false in the web ACL. Before deleting any web ACL, first disassociate it from all resources. To retrieve a list of the resources that are associated with a web ACL, use the following calls: For Amazon CloudFront distributions, use the CloudFront call ListDistributionsByWebACLId. For information, see ListDistributionsByWebACLId in the Amazon CloudFront API Reference. For all other resources, call ListResourcesForWebACL. To disassociate a resource from a web ACL, use the following calls: For Amazon CloudFront distributions, provide an empty web ACL ID in the CloudFront call UpdateDistribution. For information, see UpdateDistribution in the Amazon CloudFront API Reference. For all other resources, call DisassociateWebACL.

```sql
DELETE FROM aws.wafv2.web_acls
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
