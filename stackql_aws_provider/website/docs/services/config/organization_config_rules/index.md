--- 
title: organization_config_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_config_rules
  - config
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

Creates, updates, deletes, gets or lists an <code>organization_config_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organization_config_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.organization_config_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_organization_config_rules"
    values={[
        { label: 'describe_organization_config_rules', value: 'describe_organization_config_rules' }
    ]}
>
<TabItem value="describe_organization_config_rules">

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
    <td><CopyableCode code="ExcludedAccounts" /></td>
    <td><code>array</code></td>
    <td>A comma-separated list of accounts excluded from organization Config rule.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last update.</td>
</tr>
<tr>
    <td><CopyableCode code="OrganizationConfigRuleArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of organization Config rule.</td>
</tr>
<tr>
    <td><CopyableCode code="OrganizationConfigRuleName" /></td>
    <td><code>string</code></td>
    <td>The name that you assign to organization Config rule. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OrganizationCustomPolicyRuleMetadata" /></td>
    <td><code>object</code></td>
    <td>An object that specifies metadata for your organization's Config Custom Policy rule. The metadata includes the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata, such as resource type, resource ID of Amazon Web Services resource, and organization trigger types that initiate Config to evaluate Amazon Web Services resources against a rule.</td>
</tr>
<tr>
    <td><CopyableCode code="OrganizationCustomRuleMetadata" /></td>
    <td><code>object</code></td>
    <td>An OrganizationCustomRuleMetadata object.</td>
</tr>
<tr>
    <td><CopyableCode code="OrganizationManagedRuleMetadata" /></td>
    <td><code>object</code></td>
    <td>An OrganizationManagedRuleMetadata object.</td>
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
    <td><a href="#describe_organization_config_rules"><CopyableCode code="describe_organization_config_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of organization Config rules. When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization Config rule names. It is only applicable, when you request all the organization Config rules. For accounts within an organization If you deploy an organizational rule or conformance pack in an organization administrator account, and then establish a delegated administrator and deploy an organizational rule or conformance pack in the delegated administrator account, you won't be able to see the organizational rule or conformance pack in the organization administrator account from the delegated administrator account or see the organizational rule or conformance pack in the delegated administrator account from organization administrator account. The DescribeOrganizationConfigRules and DescribeOrganizationConformancePacks APIs can only see and interact with the organization-related resource that were deployed from within the account calling those APIs.</td>
</tr>
<tr>
    <td><a href="#put_organization_config_rule"><CopyableCode code="put_organization_config_rule" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationConfigRuleName"><code>OrganizationConfigRuleName</code></a></td>
    <td></td>
    <td>Adds or updates an Config rule for your entire organization to evaluate if your Amazon Web Services resources comply with your desired configurations. For information on how many organization Config rules you can have per account, see Service Limits in the Config Developer Guide. Only a management account and a delegated administrator can create or update an organization Config rule. When calling this API with a delegated administrator, you must ensure Organizations ListDelegatedAdministrator permissions are added. An organization can have up to 3 delegated administrators. This API enables organization service access through the EnableAWSServiceAccess action and creates a service-linked role AWSServiceRoleForConfigMultiAccountSetup in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. Config verifies the existence of role with GetRole action. To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization register-delegated-administrator for config-multiaccountsetup.amazonaws.com. There are two types of rules: Config Managed Rules and Config Custom Rules. You can use PutOrganizationConfigRule to create both Config Managed Rules and Config Custom Rules. Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see List of Config Managed Rules. If you are adding an Config managed rule, you must specify the rule's identifier for the RuleIdentifier key. Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions ( Lambda Developer Guide) and with Guard (Guard GitHub Repository), a policy-as-code language. Config custom rules created with Lambda are called Config Custom Lambda Rules and Config custom rules created with Guard are called Config Custom Policy Rules. If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function in the management account or a delegated administrator that the rule invokes to evaluate your resources. You also need to create an IAM role in the managed account that can be assumed by the Lambda function. When you use PutOrganizationConfigRule to add a Custom Lambda rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function. Prerequisite: Ensure you call EnableAllFeatures API to enable all features in an organization. Make sure to specify one of either OrganizationCustomPolicyRuleMetadata for Custom Policy rules, OrganizationCustomRuleMetadata for Custom Lambda rules, or OrganizationManagedRuleMetadata for managed rules.</td>
</tr>
<tr>
    <td><a href="#delete_organization_config_rule"><CopyableCode code="delete_organization_config_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified organization Config rule and all of its evaluation results from all member accounts in that organization. Only a management account and a delegated administrator account can delete an organization Config rule. When calling this API with a delegated administrator, you must ensure Organizations ListDelegatedAdministrator permissions are added. Config sets the state of a rule to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a rule while it is in this state. Recommendation: Consider excluding the AWS::Config::ResourceCompliance resource type from recording before deleting rules Deleting rules creates configuration items (CIs) for AWS::Config::ResourceCompliance that can affect your costs for the configuration recorder. If you are deleting rules which evaluate a large number of resource types, this can lead to a spike in the number of CIs recorded. To avoid the associated costs, you can opt to disable recording for the AWS::Config::ResourceCompliance resource type before deleting rules, and re-enable recording after the rules have been deleted. However, since deleting rules is an asynchronous process, it might take an hour or more to complete. During the time when recording is disabled for AWS::Config::ResourceCompliance, rule evaluations will not be recorded in the associated resource’s history.</td>
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
    defaultValue="describe_organization_config_rules"
    values={[
        { label: 'describe_organization_config_rules', value: 'describe_organization_config_rules' }
    ]}
>
<TabItem value="describe_organization_config_rules">

Returns a list of organization Config rules. When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization Config rule names. It is only applicable, when you request all the organization Config rules. For accounts within an organization If you deploy an organizational rule or conformance pack in an organization administrator account, and then establish a delegated administrator and deploy an organizational rule or conformance pack in the delegated administrator account, you won't be able to see the organizational rule or conformance pack in the organization administrator account from the delegated administrator account or see the organizational rule or conformance pack in the delegated administrator account from organization administrator account. The DescribeOrganizationConfigRules and DescribeOrganizationConformancePacks APIs can only see and interact with the organization-related resource that were deployed from within the account calling those APIs.

```sql
SELECT
ExcludedAccounts,
LastUpdateTime,
OrganizationConfigRuleArn,
OrganizationConfigRuleName,
OrganizationCustomPolicyRuleMetadata,
OrganizationCustomRuleMetadata,
OrganizationManagedRuleMetadata
FROM aws.config.organization_config_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_organization_config_rule"
    values={[
        { label: 'put_organization_config_rule', value: 'put_organization_config_rule' }
    ]}
>
<TabItem value="put_organization_config_rule">

Adds or updates an Config rule for your entire organization to evaluate if your Amazon Web Services resources comply with your desired configurations. For information on how many organization Config rules you can have per account, see Service Limits in the Config Developer Guide. Only a management account and a delegated administrator can create or update an organization Config rule. When calling this API with a delegated administrator, you must ensure Organizations ListDelegatedAdministrator permissions are added. An organization can have up to 3 delegated administrators. This API enables organization service access through the EnableAWSServiceAccess action and creates a service-linked role AWSServiceRoleForConfigMultiAccountSetup in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. Config verifies the existence of role with GetRole action. To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization register-delegated-administrator for config-multiaccountsetup.amazonaws.com. There are two types of rules: Config Managed Rules and Config Custom Rules. You can use PutOrganizationConfigRule to create both Config Managed Rules and Config Custom Rules. Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see List of Config Managed Rules. If you are adding an Config managed rule, you must specify the rule's identifier for the RuleIdentifier key. Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions ( Lambda Developer Guide) and with Guard (Guard GitHub Repository), a policy-as-code language. Config custom rules created with Lambda are called Config Custom Lambda Rules and Config custom rules created with Guard are called Config Custom Policy Rules. If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function in the management account or a delegated administrator that the rule invokes to evaluate your resources. You also need to create an IAM role in the managed account that can be assumed by the Lambda function. When you use PutOrganizationConfigRule to add a Custom Lambda rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function. Prerequisite: Ensure you call EnableAllFeatures API to enable all features in an organization. Make sure to specify one of either OrganizationCustomPolicyRuleMetadata for Custom Policy rules, OrganizationCustomRuleMetadata for Custom Lambda rules, or OrganizationManagedRuleMetadata for managed rules.

```sql
REPLACE aws.config.organization_config_rules
SET 
OrganizationConfigRuleName = '{{ OrganizationConfigRuleName }}',
OrganizationManagedRuleMetadata = '{{ OrganizationManagedRuleMetadata }}',
OrganizationCustomRuleMetadata = '{{ OrganizationCustomRuleMetadata }}',
ExcludedAccounts = '{{ ExcludedAccounts }}',
OrganizationCustomPolicyRuleMetadata = '{{ OrganizationCustomPolicyRuleMetadata }}'
WHERE 
region = '{{ region }}' --required
AND OrganizationConfigRuleName = '{{ OrganizationConfigRuleName }}' --required
RETURNING
OrganizationConfigRuleArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_organization_config_rule"
    values={[
        { label: 'delete_organization_config_rule', value: 'delete_organization_config_rule' }
    ]}
>
<TabItem value="delete_organization_config_rule">

Deletes the specified organization Config rule and all of its evaluation results from all member accounts in that organization. Only a management account and a delegated administrator account can delete an organization Config rule. When calling this API with a delegated administrator, you must ensure Organizations ListDelegatedAdministrator permissions are added. Config sets the state of a rule to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a rule while it is in this state. Recommendation: Consider excluding the AWS::Config::ResourceCompliance resource type from recording before deleting rules Deleting rules creates configuration items (CIs) for AWS::Config::ResourceCompliance that can affect your costs for the configuration recorder. If you are deleting rules which evaluate a large number of resource types, this can lead to a spike in the number of CIs recorded. To avoid the associated costs, you can opt to disable recording for the AWS::Config::ResourceCompliance resource type before deleting rules, and re-enable recording after the rules have been deleted. However, since deleting rules is an asynchronous process, it might take an hour or more to complete. During the time when recording is disabled for AWS::Config::ResourceCompliance, rule evaluations will not be recorded in the associated resource’s history.

```sql
DELETE FROM aws.config.organization_config_rules
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
