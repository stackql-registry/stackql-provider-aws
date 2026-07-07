--- 
title: config_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - config_rules
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

Creates, updates, deletes, gets or lists a <code>config_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="config_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.config_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_config_rules"
    values={[
        { label: 'describe_config_rules', value: 'describe_config_rules' }
    ]}
>
<TabItem value="describe_config_rules">

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
    <td><CopyableCode code="ConfigRuleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Config rule.</td>
</tr>
<tr>
    <td><CopyableCode code="ConfigRuleId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Config rule.</td>
</tr>
<tr>
    <td><CopyableCode code="ConfigRuleName" /></td>
    <td><code>string</code></td>
    <td>The name that you assign to the Config rule. The name is required if you are adding a new rule. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ConfigRuleState" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the Config rule is active or is currently being deleted by Config. It can also indicate the evaluation status for the Config rule. Config sets the state of the rule to EVALUATING temporarily after you use the StartConfigRulesEvaluation request to evaluate your resources against the Config rule. Config sets the state of the rule to DELETING_RESULTS temporarily after you use the DeleteEvaluationResults request to delete the current evaluation results for the Config rule. Config temporarily sets the state of a rule to DELETING after you use the DeleteConfigRule request to delete the rule. After Config deletes the rule, the rule and all of its evaluations are erased and are no longer available. (ACTIVE, DELETING, DELETING_RESULTS, EVALUATING)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>string</code></td>
    <td>Service principal name of the service that created the rule. The field is populated only if the service-linked rule is created by a service. The field is empty if you create your own rule.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description that you provide for the Config rule.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationModes" /></td>
    <td><code>array</code></td>
    <td>The modes the Config rule can be evaluated in. The valid values are distinct objects. By default, the value is Detective evaluation mode only.</td>
</tr>
<tr>
    <td><CopyableCode code="InputParameters" /></td>
    <td><code>string</code></td>
    <td>A string, in JSON format, that is passed to the Config rule Lambda function.</td>
</tr>
<tr>
    <td><CopyableCode code="MaximumExecutionFrequency" /></td>
    <td><code>string</code></td>
    <td>The maximum frequency with which Config runs evaluations for a rule. You can specify a value for MaximumExecutionFrequency when: This is for an Config managed rule that is triggered at a periodic frequency. Your custom rule is triggered when Config delivers the configuration snapshot. For more information, see ConfigSnapshotDeliveryProperties. By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the MaximumExecutionFrequency parameter. (One_Hour, Three_Hours, Six_Hours, Twelve_Hours, TwentyFour_Hours)</td>
</tr>
<tr>
    <td><CopyableCode code="Scope" /></td>
    <td><code>object</code></td>
    <td>Defines which resources can trigger an evaluation for the rule. The scope can include one or more resource types, a combination of one resource type and one resource ID, or a combination of a tag key and value. Specify a scope to constrain the resources that can trigger an evaluation for the rule. If you do not specify a scope, evaluations are triggered when any resource in the recording group changes.</td>
</tr>
<tr>
    <td><CopyableCode code="Source" /></td>
    <td><code>object</code></td>
    <td>Provides the rule owner (Amazon Web Services for managed rules, CUSTOM_POLICY for Custom Policy rules, and CUSTOM_LAMBDA for Custom Lambda rules), the rule identifier, and the notifications that cause the function to evaluate your Amazon Web Services resources.</td>
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
    <td><a href="#describe_config_rules"><CopyableCode code="describe_config_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about your Config rules.</td>
</tr>
<tr>
    <td><a href="#put_external_evaluation"><CopyableCode code="put_external_evaluation" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigRuleName"><code>ConfigRuleName</code></a>, <a href="#parameter-ExternalEvaluation"><code>ExternalEvaluation</code></a></td>
    <td></td>
    <td>Add or updates the evaluations for process checks. This API checks if the rule is a process check when the name of the Config rule is provided.</td>
</tr>
<tr>
    <td><a href="#put_config_rule"><CopyableCode code="put_config_rule" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigRule"><code>ConfigRule</code></a></td>
    <td></td>
    <td>Adds or updates an Config rule to evaluate if your Amazon Web Services resources comply with your desired configurations. For information on how many Config rules you can have per account, see Service Limits in the Config Developer Guide. There are two types of rules: Config Managed Rules and Config Custom Rules. You can use PutConfigRule to create both Config Managed Rules and Config Custom Rules. Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see List of Config Managed Rules. If you are adding an Config managed rule, you must specify the rule's identifier for the SourceIdentifier key. Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions ( Lambda Developer Guide) and with Guard (Guard GitHub Repository), a policy-as-code language. Config custom rules created with Lambda are called Config Custom Lambda Rules and Config custom rules created with Guard are called Config Custom Policy Rules. If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function that the rule invokes to evaluate your resources. When you use PutConfigRule to add a Custom Lambda rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function. You specify the ARN in the SourceIdentifier key. This key is part of the Source object, which is part of the ConfigRule object. For any new Config rule that you add, specify the ConfigRuleName in the ConfigRule object. Do not specify the ConfigRuleArn or the ConfigRuleId. These values are generated by Config for new rules. If you are updating a rule that you added previously, you can specify the rule by ConfigRuleName, ConfigRuleId, or ConfigRuleArn in the ConfigRule data type that you use in this request. For more information about developing and using Config rules, see Evaluating Resources with Config Rules in the Config Developer Guide. Tags are added at creation and cannot be updated with this operation PutConfigRule is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different tags values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, tags will not be updated, even if they are different. Use TagResource and UntagResource to update tags after creation.</td>
</tr>
<tr>
    <td><a href="#delete_config_rule"><CopyableCode code="delete_config_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Config rule and all of its evaluation results. Config sets the state of a rule to DELETING until the deletion is complete. You cannot update a rule while it is in this state. If you make a PutConfigRule or DeleteConfigRule request for the rule, you will receive a ResourceInUseException. You can check the state of a rule by using the DescribeConfigRules request. Recommendation: Consider excluding the AWS::Config::ResourceCompliance resource type from recording before deleting rules Deleting rules creates configuration items (CIs) for AWS::Config::ResourceCompliance that can affect your costs for the configuration recorder. If you are deleting rules which evaluate a large number of resource types, this can lead to a spike in the number of CIs recorded. To avoid the associated costs, you can opt to disable recording for the AWS::Config::ResourceCompliance resource type before deleting rules, and re-enable recording after the rules have been deleted. However, since deleting rules is an asynchronous process, it might take an hour or more to complete. During the time when recording is disabled for AWS::Config::ResourceCompliance, rule evaluations will not be recorded in the associated resource’s history.</td>
</tr>
<tr>
    <td><a href="#delete_evaluation_results"><CopyableCode code="delete_evaluation_results" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigRuleName"><code>ConfigRuleName</code></a></td>
    <td></td>
    <td>Deletes the evaluation results for the specified Config rule. You can specify one Config rule per request. After you delete the evaluation results, you can call the StartConfigRulesEvaluation API to start evaluating your Amazon Web Services resources against the rule.</td>
</tr>
<tr>
    <td><a href="#start_config_rules_evaluation"><CopyableCode code="start_config_rules_evaluation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Runs an on-demand evaluation for the specified Config rules against the last known configuration state of the resources. Use StartConfigRulesEvaluation when you want to test that a rule you updated is working as expected. StartConfigRulesEvaluation does not re-record the latest configuration state for your resources. It re-runs an evaluation against the last known state of your resources. You can specify up to 25 Config rules per request. An existing StartConfigRulesEvaluation call for the specified rules must complete before you can call the API again. If you chose to have Config stream to an Amazon SNS topic, you will receive a ConfigRuleEvaluationStarted notification when the evaluation starts. You don't need to call the StartConfigRulesEvaluation API to run an evaluation for a new rule. When you create a rule, Config evaluates your resources against the rule automatically. The StartConfigRulesEvaluation API is useful if you want to run on-demand evaluations, such as the following example: You have a custom rule that evaluates your IAM resources every 24 hours. You update your Lambda function to add additional conditions to your rule. Instead of waiting for the next periodic evaluation, you call the StartConfigRulesEvaluation API. Config invokes your Lambda function and evaluates your IAM resources. Your custom rule will still run periodic evaluations every 24 hours.</td>
</tr>
<tr>
    <td><a href="#start_remediation_execution"><CopyableCode code="start_remediation_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigRuleName"><code>ConfigRuleName</code></a>, <a href="#parameter-ResourceKeys"><code>ResourceKeys</code></a></td>
    <td></td>
    <td>Runs an on-demand remediation for the specified Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous. You can specify up to 100 resource keys per request. An existing StartRemediationExecution call for the specified resource keys must complete before you can call the API again.</td>
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
    defaultValue="describe_config_rules"
    values={[
        { label: 'describe_config_rules', value: 'describe_config_rules' }
    ]}
>
<TabItem value="describe_config_rules">

Returns details about your Config rules.

```sql
SELECT
ConfigRuleArn,
ConfigRuleId,
ConfigRuleName,
ConfigRuleState,
CreatedBy,
Description,
EvaluationModes,
InputParameters,
MaximumExecutionFrequency,
Scope,
Source
FROM aws.config.config_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_external_evaluation"
    values={[
        { label: 'put_external_evaluation', value: 'put_external_evaluation' },
        { label: 'put_config_rule', value: 'put_config_rule' }
    ]}
>
<TabItem value="put_external_evaluation">

Add or updates the evaluations for process checks. This API checks if the rule is a process check when the name of the Config rule is provided.

```sql
REPLACE aws.config.config_rules
SET 
ConfigRuleName = '{{ ConfigRuleName }}',
ExternalEvaluation = '{{ ExternalEvaluation }}'
WHERE 
region = '{{ region }}' --required
AND ConfigRuleName = '{{ ConfigRuleName }}' --required
AND ExternalEvaluation = '{{ ExternalEvaluation }}' --required;
```
</TabItem>
<TabItem value="put_config_rule">

Adds or updates an Config rule to evaluate if your Amazon Web Services resources comply with your desired configurations. For information on how many Config rules you can have per account, see Service Limits in the Config Developer Guide. There are two types of rules: Config Managed Rules and Config Custom Rules. You can use PutConfigRule to create both Config Managed Rules and Config Custom Rules. Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see List of Config Managed Rules. If you are adding an Config managed rule, you must specify the rule's identifier for the SourceIdentifier key. Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions ( Lambda Developer Guide) and with Guard (Guard GitHub Repository), a policy-as-code language. Config custom rules created with Lambda are called Config Custom Lambda Rules and Config custom rules created with Guard are called Config Custom Policy Rules. If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function that the rule invokes to evaluate your resources. When you use PutConfigRule to add a Custom Lambda rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function. You specify the ARN in the SourceIdentifier key. This key is part of the Source object, which is part of the ConfigRule object. For any new Config rule that you add, specify the ConfigRuleName in the ConfigRule object. Do not specify the ConfigRuleArn or the ConfigRuleId. These values are generated by Config for new rules. If you are updating a rule that you added previously, you can specify the rule by ConfigRuleName, ConfigRuleId, or ConfigRuleArn in the ConfigRule data type that you use in this request. For more information about developing and using Config rules, see Evaluating Resources with Config Rules in the Config Developer Guide. Tags are added at creation and cannot be updated with this operation PutConfigRule is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different tags values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, tags will not be updated, even if they are different. Use TagResource and UntagResource to update tags after creation.

```sql
REPLACE aws.config.config_rules
SET 
ConfigRule = '{{ ConfigRule }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND ConfigRule = '{{ ConfigRule }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_config_rule"
    values={[
        { label: 'delete_config_rule', value: 'delete_config_rule' }
    ]}
>
<TabItem value="delete_config_rule">

Deletes the specified Config rule and all of its evaluation results. Config sets the state of a rule to DELETING until the deletion is complete. You cannot update a rule while it is in this state. If you make a PutConfigRule or DeleteConfigRule request for the rule, you will receive a ResourceInUseException. You can check the state of a rule by using the DescribeConfigRules request. Recommendation: Consider excluding the AWS::Config::ResourceCompliance resource type from recording before deleting rules Deleting rules creates configuration items (CIs) for AWS::Config::ResourceCompliance that can affect your costs for the configuration recorder. If you are deleting rules which evaluate a large number of resource types, this can lead to a spike in the number of CIs recorded. To avoid the associated costs, you can opt to disable recording for the AWS::Config::ResourceCompliance resource type before deleting rules, and re-enable recording after the rules have been deleted. However, since deleting rules is an asynchronous process, it might take an hour or more to complete. During the time when recording is disabled for AWS::Config::ResourceCompliance, rule evaluations will not be recorded in the associated resource’s history.

```sql
DELETE FROM aws.config.config_rules
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="delete_evaluation_results"
    values={[
        { label: 'delete_evaluation_results', value: 'delete_evaluation_results' },
        { label: 'start_config_rules_evaluation', value: 'start_config_rules_evaluation' },
        { label: 'start_remediation_execution', value: 'start_remediation_execution' }
    ]}
>
<TabItem value="delete_evaluation_results">

Deletes the evaluation results for the specified Config rule. You can specify one Config rule per request. After you delete the evaluation results, you can call the StartConfigRulesEvaluation API to start evaluating your Amazon Web Services resources against the rule.

```sql
EXEC aws.config.config_rules.delete_evaluation_results 
@region='{{ region }}' --required 
@@json=
'{
"ConfigRuleName": "{{ ConfigRuleName }}"
}'
;
```
</TabItem>
<TabItem value="start_config_rules_evaluation">

Runs an on-demand evaluation for the specified Config rules against the last known configuration state of the resources. Use StartConfigRulesEvaluation when you want to test that a rule you updated is working as expected. StartConfigRulesEvaluation does not re-record the latest configuration state for your resources. It re-runs an evaluation against the last known state of your resources. You can specify up to 25 Config rules per request. An existing StartConfigRulesEvaluation call for the specified rules must complete before you can call the API again. If you chose to have Config stream to an Amazon SNS topic, you will receive a ConfigRuleEvaluationStarted notification when the evaluation starts. You don't need to call the StartConfigRulesEvaluation API to run an evaluation for a new rule. When you create a rule, Config evaluates your resources against the rule automatically. The StartConfigRulesEvaluation API is useful if you want to run on-demand evaluations, such as the following example: You have a custom rule that evaluates your IAM resources every 24 hours. You update your Lambda function to add additional conditions to your rule. Instead of waiting for the next periodic evaluation, you call the StartConfigRulesEvaluation API. Config invokes your Lambda function and evaluates your IAM resources. Your custom rule will still run periodic evaluations every 24 hours.

```sql
EXEC aws.config.config_rules.start_config_rules_evaluation 
@region='{{ region }}' --required 
@@json=
'{
"ConfigRuleNames": "{{ ConfigRuleNames }}"
}'
;
```
</TabItem>
<TabItem value="start_remediation_execution">

Runs an on-demand remediation for the specified Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous. You can specify up to 100 resource keys per request. An existing StartRemediationExecution call for the specified resource keys must complete before you can call the API again.

```sql
EXEC aws.config.config_rules.start_remediation_execution 
@region='{{ region }}' --required 
@@json=
'{
"ConfigRuleName": "{{ ConfigRuleName }}", 
"ResourceKeys": "{{ ResourceKeys }}"
}'
;
```
</TabItem>
</Tabs>
