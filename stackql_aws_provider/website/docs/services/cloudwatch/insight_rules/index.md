--- 
title: insight_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - insight_rules
  - cloudwatch
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

Creates, updates, deletes, gets or lists an <code>insight_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="insight_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudwatch.insight_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_insight_rules"
    values={[
        { label: 'describe_insight_rules', value: 'describe_insight_rules' }
    ]}
>
<TabItem value="describe_insight_rules">

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
    <td><CopyableCode code="InsightRules" /></td>
    <td><code>array</code></td>
    <td>The rules returned by the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If this parameter is present, it is a token that marks the start of the next batch of returned results.</td>
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
    <td><a href="#describe_insight_rules"><CopyableCode code="describe_insight_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all the Contributor Insights rules in your account. For more information about Contributor Insights, see Using Contributor Insights to Analyze High-Cardinality Data.</td>
</tr>
<tr>
    <td><a href="#put_insight_rule"><CopyableCode code="put_insight_rule" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleName"><code>RuleName</code></a>, <a href="#parameter-RuleDefinition"><code>RuleDefinition</code></a></td>
    <td></td>
    <td>Creates a Contributor Insights rule. Rules evaluate log events in a CloudWatch Logs log group, enabling you to find contributor data for the log events in that log group. For more information, see Using Contributor Insights to Analyze High-Cardinality Data. If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available.</td>
</tr>
<tr>
    <td><a href="#delete_insight_rules"><CopyableCode code="delete_insight_rules" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently deletes the specified Contributor Insights rules. If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available.</td>
</tr>
<tr>
    <td><a href="#disable_insight_rules"><CopyableCode code="disable_insight_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleNames"><code>RuleNames</code></a></td>
    <td></td>
    <td>Disables the specified Contributor Insights rules. When rules are disabled, they do not analyze log groups and do not incur costs.</td>
</tr>
<tr>
    <td><a href="#enable_insight_rules"><CopyableCode code="enable_insight_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleNames"><code>RuleNames</code></a></td>
    <td></td>
    <td>Enables the specified Contributor Insights rules. When rules are enabled, they immediately begin analyzing log data.</td>
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
    defaultValue="describe_insight_rules"
    values={[
        { label: 'describe_insight_rules', value: 'describe_insight_rules' }
    ]}
>
<TabItem value="describe_insight_rules">

Returns a list of all the Contributor Insights rules in your account. For more information about Contributor Insights, see Using Contributor Insights to Analyze High-Cardinality Data.

```sql
SELECT
InsightRules,
NextToken
FROM aws.cloudwatch.insight_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_insight_rule"
    values={[
        { label: 'put_insight_rule', value: 'put_insight_rule' }
    ]}
>
<TabItem value="put_insight_rule">

Creates a Contributor Insights rule. Rules evaluate log events in a CloudWatch Logs log group, enabling you to find contributor data for the log events in that log group. For more information, see Using Contributor Insights to Analyze High-Cardinality Data. If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available.

```sql
REPLACE aws.cloudwatch.insight_rules
SET 
RuleName = '{{ RuleName }}',
RuleState = '{{ RuleState }}',
RuleDefinition = '{{ RuleDefinition }}',
Tags = '{{ Tags }}',
ApplyOnTransformedLogs = {{ ApplyOnTransformedLogs }}
WHERE 
region = '{{ region }}' --required
AND RuleName = '{{ RuleName }}' --required
AND RuleDefinition = '{{ RuleDefinition }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_insight_rules"
    values={[
        { label: 'delete_insight_rules', value: 'delete_insight_rules' }
    ]}
>
<TabItem value="delete_insight_rules">

Permanently deletes the specified Contributor Insights rules. If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available.

```sql
DELETE FROM aws.cloudwatch.insight_rules
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_insight_rules"
    values={[
        { label: 'disable_insight_rules', value: 'disable_insight_rules' },
        { label: 'enable_insight_rules', value: 'enable_insight_rules' }
    ]}
>
<TabItem value="disable_insight_rules">

Disables the specified Contributor Insights rules. When rules are disabled, they do not analyze log groups and do not incur costs.

```sql
EXEC aws.cloudwatch.insight_rules.disable_insight_rules 
@region='{{ region }}' --required 
@@json=
'{
"RuleNames": "{{ RuleNames }}"
}'
;
```
</TabItem>
<TabItem value="enable_insight_rules">

Enables the specified Contributor Insights rules. When rules are enabled, they immediately begin analyzing log data.

```sql
EXEC aws.cloudwatch.insight_rules.enable_insight_rules 
@region='{{ region }}' --required 
@@json=
'{
"RuleNames": "{{ RuleNames }}"
}'
;
```
</TabItem>
</Tabs>
