--- 
title: compliance_details_by_config_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - compliance_details_by_config_rules
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

Creates, updates, deletes, gets or lists a <code>compliance_details_by_config_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compliance_details_by_config_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.compliance_details_by_config_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_compliance_details_by_config_rule"
    values={[
        { label: 'get_compliance_details_by_config_rule', value: 'get_compliance_details_by_config_rule' }
    ]}
>
<TabItem value="get_compliance_details_by_config_rule">

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
    <td><CopyableCode code="Annotation" /></td>
    <td><code>string</code></td>
    <td>Supplementary information about how the evaluation determined the compliance.</td>
</tr>
<tr>
    <td><CopyableCode code="ComplianceType" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the Amazon Web Services resource complies with the Config rule that evaluated it. For the EvaluationResult data type, Config supports only the COMPLIANT, NON_COMPLIANT, and NOT_APPLICABLE values. Config does not support the INSUFFICIENT_DATA value for the EvaluationResult data type. (COMPLIANT, NON_COMPLIANT, NOT_APPLICABLE, INSUFFICIENT_DATA)</td>
</tr>
<tr>
    <td><CopyableCode code="ConfigRuleInvokedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the Config rule evaluated the Amazon Web Services resource.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationResultIdentifier" /></td>
    <td><code>object</code></td>
    <td>Uniquely identifies the evaluation result.</td>
</tr>
<tr>
    <td><CopyableCode code="ResultRecordedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when Config recorded the evaluation result.</td>
</tr>
<tr>
    <td><CopyableCode code="ResultToken" /></td>
    <td><code>string</code></td>
    <td>An encrypted token that associates an evaluation with an Config rule. The token identifies the rule, the Amazon Web Services resource being evaluated, and the event that triggered the evaluation.</td>
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
    <td><a href="#get_compliance_details_by_config_rule"><CopyableCode code="get_compliance_details_by_config_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the evaluation results for the specified Config rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule.</td>
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
    defaultValue="get_compliance_details_by_config_rule"
    values={[
        { label: 'get_compliance_details_by_config_rule', value: 'get_compliance_details_by_config_rule' }
    ]}
>
<TabItem value="get_compliance_details_by_config_rule">

Returns the evaluation results for the specified Config rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule.

```sql
SELECT
Annotation,
ComplianceType,
ConfigRuleInvokedTime,
EvaluationResultIdentifier,
ResultRecordedTime,
ResultToken
FROM aws.config.compliance_details_by_config_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
