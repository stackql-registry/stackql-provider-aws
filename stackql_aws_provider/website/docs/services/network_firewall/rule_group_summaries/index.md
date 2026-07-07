--- 
title: rule_group_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - rule_group_summaries
  - network_firewall
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

Creates, updates, deletes, gets or lists a <code>rule_group_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rule_group_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.rule_group_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_rule_group_summary"
    values={[
        { label: 'describe_rule_group_summary', value: 'describe_rule_group_summary' }
    ]}
>
<TabItem value="describe_rule_group_summary">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the rule group. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RuleGroupName" /></td>
    <td><code>string</code></td>
    <td>The descriptive name of the rule group. You can't change the name of a rule group after you create it. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Summary" /></td>
    <td><code>object</code></td>
    <td>A complex type that contains rule information based on the rule group's configured summary settings. The content varies depending on the fields that you specified to extract in your SummaryConfiguration. When you haven't configured any summary settings, this returns an empty array. The response might include: Rule identifiers Rule descriptions Any metadata fields that you specified in your SummaryConfiguration</td>
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
    <td><a href="#describe_rule_group_summary"><CopyableCode code="describe_rule_group_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed information for a stateful rule group. For active threat defense Amazon Web Services managed rule groups, this operation provides insight into the protections enabled by the rule group, based on Suricata rule metadata fields. Summaries are available for rule groups you manage and for active threat defense Amazon Web Services managed rule groups. To modify how threat information appears in summaries, use the SummaryConfiguration parameter in UpdateRuleGroup.</td>
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
    defaultValue="describe_rule_group_summary"
    values={[
        { label: 'describe_rule_group_summary', value: 'describe_rule_group_summary' }
    ]}
>
<TabItem value="describe_rule_group_summary">

Returns detailed information for a stateful rule group. For active threat defense Amazon Web Services managed rule groups, this operation provides insight into the protections enabled by the rule group, based on Suricata rule metadata fields. Summaries are available for rule groups you manage and for active threat defense Amazon Web Services managed rule groups. To modify how threat information appears in summaries, use the SummaryConfiguration parameter in UpdateRuleGroup.

```sql
SELECT
Description,
RuleGroupName,
Summary
FROM aws.network_firewall.rule_group_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
