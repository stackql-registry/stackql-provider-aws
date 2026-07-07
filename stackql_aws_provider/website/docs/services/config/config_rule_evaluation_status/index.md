--- 
title: config_rule_evaluation_status
hide_title: false
hide_table_of_contents: false
keywords:
  - config_rule_evaluation_status
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

Creates, updates, deletes, gets or lists a <code>config_rule_evaluation_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="config_rule_evaluation_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.config_rule_evaluation_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_config_rule_evaluation_status"
    values={[
        { label: 'describe_config_rule_evaluation_status', value: 'describe_config_rule_evaluation_status' }
    ]}
>
<TabItem value="describe_config_rule_evaluation_status">

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
    <td>The name of the Config rule. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FirstActivatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that you first activated the Config rule.</td>
</tr>
<tr>
    <td><CopyableCode code="FirstEvaluationStarted" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Config has evaluated your resources against the rule at least once. true - Config has evaluated your Amazon Web Services resources against the rule at least once. false - Config has not finished evaluating your Amazon Web Services resources against the rule at least once.</td>
</tr>
<tr>
    <td><CopyableCode code="LastDeactivatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that you last turned off the Config rule.</td>
</tr>
<tr>
    <td><CopyableCode code="LastDebugLogDeliveryStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the last attempted delivery of a debug log for your Config Custom Policy rules. Either Successful or Failed.</td>
</tr>
<tr>
    <td><CopyableCode code="LastDebugLogDeliveryStatusReason" /></td>
    <td><code>string</code></td>
    <td>The reason Config was not able to deliver a debug log. This is for the last failed attempt to retrieve a debug log for your Config Custom Policy rules.</td>
</tr>
<tr>
    <td><CopyableCode code="LastDebugLogDeliveryTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time Config last attempted to deliver a debug log for your Config Custom Policy rules.</td>
</tr>
<tr>
    <td><CopyableCode code="LastErrorCode" /></td>
    <td><code>string</code></td>
    <td>The error code that Config returned when the rule last failed.</td>
</tr>
<tr>
    <td><CopyableCode code="LastErrorMessage" /></td>
    <td><code>string</code></td>
    <td>The error message that Config returned when the rule last failed.</td>
</tr>
<tr>
    <td><CopyableCode code="LastFailedEvaluationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that Config last failed to evaluate your Amazon Web Services resources against the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="LastFailedInvocationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that Config last failed to invoke the Config rule to evaluate your Amazon Web Services resources.</td>
</tr>
<tr>
    <td><CopyableCode code="LastSuccessfulEvaluationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that Config last successfully evaluated your Amazon Web Services resources against the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="LastSuccessfulInvocationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that Config last successfully invoked the Config rule to evaluate your Amazon Web Services resources.</td>
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
    <td><a href="#describe_config_rule_evaluation_status"><CopyableCode code="describe_config_rule_evaluation_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns status information for each of your Config managed rules. The status includes information such as the last time Config invoked the rule, the last time Config failed to invoke the rule, and the related error for the last failure.</td>
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
    defaultValue="describe_config_rule_evaluation_status"
    values={[
        { label: 'describe_config_rule_evaluation_status', value: 'describe_config_rule_evaluation_status' }
    ]}
>
<TabItem value="describe_config_rule_evaluation_status">

Returns status information for each of your Config managed rules. The status includes information such as the last time Config invoked the rule, the last time Config failed to invoke the rule, and the related error for the last failure.

```sql
SELECT
ConfigRuleArn,
ConfigRuleId,
ConfigRuleName,
FirstActivatedTime,
FirstEvaluationStarted,
LastDeactivatedTime,
LastDebugLogDeliveryStatus,
LastDebugLogDeliveryStatusReason,
LastDebugLogDeliveryTime,
LastErrorCode,
LastErrorMessage,
LastFailedEvaluationTime,
LastFailedInvocationTime,
LastSuccessfulEvaluationTime,
LastSuccessfulInvocationTime
FROM aws.config.config_rule_evaluation_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
