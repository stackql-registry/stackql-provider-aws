--- 
title: compliance_by_config_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - compliance_by_config_rules
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

Creates, updates, deletes, gets or lists a <code>compliance_by_config_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compliance_by_config_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.compliance_by_config_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_compliance_by_config_rule"
    values={[
        { label: 'describe_compliance_by_config_rule', value: 'describe_compliance_by_config_rule' }
    ]}
>
<TabItem value="describe_compliance_by_config_rule">

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
    <td><CopyableCode code="compliance" /></td>
    <td><code>object</code></td>
    <td>Indicates whether the Config rule is compliant.</td>
</tr>
<tr>
    <td><CopyableCode code="config_rule_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Config rule.</td>
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
    <td><a href="#describe_compliance_by_config_rule"><CopyableCode code="describe_compliance_by_config_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Indicates whether the specified Config rules are compliant. If a rule is noncompliant, this operation returns the number of Amazon Web Services resources that do not comply with the rule. A rule is compliant if all of the evaluated resources comply with it. It is noncompliant if any of these resources do not comply. If Config has no current evaluation results for the rule, it returns INSUFFICIENT_DATA. This result might indicate one of the following conditions: Config has never invoked an evaluation for the rule. To check whether it has, use the DescribeConfigRuleEvaluationStatus action to get the LastSuccessfulInvocationTime and LastFailedInvocationTime. The rule's Lambda function is failing to send evaluation results to Config. Verify that the role you assigned to your configuration recorder includes the config:PutEvaluations permission. If the rule is a custom rule, verify that the Lambda execution role includes the config:PutEvaluations permission. The rule's Lambda function has returned NOT_APPLICABLE for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</td>
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
    defaultValue="describe_compliance_by_config_rule"
    values={[
        { label: 'describe_compliance_by_config_rule', value: 'describe_compliance_by_config_rule' }
    ]}
>
<TabItem value="describe_compliance_by_config_rule">

Indicates whether the specified Config rules are compliant. If a rule is noncompliant, this operation returns the number of Amazon Web Services resources that do not comply with the rule. A rule is compliant if all of the evaluated resources comply with it. It is noncompliant if any of these resources do not comply. If Config has no current evaluation results for the rule, it returns INSUFFICIENT_DATA. This result might indicate one of the following conditions: Config has never invoked an evaluation for the rule. To check whether it has, use the DescribeConfigRuleEvaluationStatus action to get the LastSuccessfulInvocationTime and LastFailedInvocationTime. The rule's Lambda function is failing to send evaluation results to Config. Verify that the role you assigned to your configuration recorder includes the config:PutEvaluations permission. If the rule is a custom rule, verify that the Lambda execution role includes the config:PutEvaluations permission. The rule's Lambda function has returned NOT_APPLICABLE for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.

```sql
SELECT
compliance,
config_rule_name
FROM aws.config.compliance_by_config_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
