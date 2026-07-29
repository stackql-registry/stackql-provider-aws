--- 
title: aggregate_compliance_details_by_config_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - aggregate_compliance_details_by_config_rules
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

Creates, updates, deletes, gets or lists an <code>aggregate_compliance_details_by_config_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aggregate_compliance_details_by_config_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.aggregate_compliance_details_by_config_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_aggregate_compliance_details_by_config_rule"
    values={[
        { label: 'get_aggregate_compliance_details_by_config_rule', value: 'get_aggregate_compliance_details_by_config_rule' }
    ]}
>
<TabItem value="get_aggregate_compliance_details_by_config_rule">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account ID of the source account. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="annotation" /></td>
    <td><code>string</code></td>
    <td>Supplementary information about how the agrregate evaluation determined the compliance.</td>
</tr>
<tr>
    <td><CopyableCode code="aws_region" /></td>
    <td><code>string</code></td>
    <td>The source region from where the data is aggregated.</td>
</tr>
<tr>
    <td><CopyableCode code="compliance_type" /></td>
    <td><code>string</code></td>
    <td>The resource compliance status. For the AggregationEvaluationResult data type, Config supports only the COMPLIANT and NON_COMPLIANT. Config does not support the NOT_APPLICABLE and INSUFFICIENT_DATA value. (COMPLIANT, NON_COMPLIANT, NOT_APPLICABLE, INSUFFICIENT_DATA)</td>
</tr>
<tr>
    <td><CopyableCode code="config_rule_invoked_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the Config rule evaluated the Amazon Web Services resource.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_result_identifier" /></td>
    <td><code>object</code></td>
    <td>Uniquely identifies the evaluation result.</td>
</tr>
<tr>
    <td><CopyableCode code="result_recorded_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when Config recorded the aggregate evaluation result.</td>
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
    <td><a href="#get_aggregate_compliance_details_by_config_rule"><CopyableCode code="get_aggregate_compliance_details_by_config_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the evaluation results for the specified Config rule for a specific resource in a rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule. The results can return an empty result page. But if you have a nextToken, the results are displayed on the next page.</td>
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
    defaultValue="get_aggregate_compliance_details_by_config_rule"
    values={[
        { label: 'get_aggregate_compliance_details_by_config_rule', value: 'get_aggregate_compliance_details_by_config_rule' }
    ]}
>
<TabItem value="get_aggregate_compliance_details_by_config_rule">

Returns the evaluation results for the specified Config rule for a specific resource in a rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule. The results can return an empty result page. But if you have a nextToken, the results are displayed on the next page.

```sql
SELECT
account_id,
annotation,
aws_region,
compliance_type,
config_rule_invoked_time,
evaluation_result_identifier,
result_recorded_time
FROM aws.config.aggregate_compliance_details_by_config_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
