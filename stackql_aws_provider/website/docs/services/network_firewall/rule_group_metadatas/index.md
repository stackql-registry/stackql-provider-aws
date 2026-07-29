--- 
title: rule_group_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - rule_group_metadatas
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

Creates, updates, deletes, gets or lists a <code>rule_group_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rule_group_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.rule_group_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_rule_group_metadata"
    values={[
        { label: 'describe_rule_group_metadata', value: 'describe_rule_group_metadata' }
    ]}
>
<TabItem value="describe_rule_group_metadata">

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
    <td><CopyableCode code="capacity" /></td>
    <td><code>integer</code></td>
    <td>The maximum operating resources that this rule group can use. Rule group capacity is fixed at creation. When you update a rule group, you are limited to this capacity. When you reference a rule group from a firewall policy, Network Firewall reserves this capacity for the rule group. You can retrieve the capacity that would be required for a rule group before you create the rule group by calling CreateRuleGroup with DryRun set to TRUE.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Returns the metadata objects for the specified rule group. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp indicating when the rule group was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="listing_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the product listing for this rule group.</td>
</tr>
<tr>
    <td><CopyableCode code="product_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the product listing associated with this rule group.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_group_arn" /></td>
    <td><code>string</code></td>
    <td>The descriptive name of the rule group. You can't change the name of a rule group after you create it. You must specify the ARN or the name, and you can specify both. (pattern: &lt;code&gt;^arn:aws.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_group_name" /></td>
    <td><code>string</code></td>
    <td>The descriptive name of the rule group. You can't change the name of a rule group after you create it. You must specify the ARN or the name, and you can specify both. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stateful_rule_options" /></td>
    <td><code>object</code></td>
    <td>Additional options governing how Network Firewall handles the rule group. You can only use these for stateful rule groups.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules. This setting is required for requests that do not include the RuleGroupARN. (STATELESS, STATEFUL, STATEFUL_DOMAIN)</td>
</tr>
<tr>
    <td><CopyableCode code="vendor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Web Services Marketplace vendor that provides this rule group.</td>
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
    <td><a href="#describe_rule_group_metadata"><CopyableCode code="describe_rule_group_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>High-level information about a rule group, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a rule group. You can retrieve all objects for a rule group by calling DescribeRuleGroup.</td>
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
    defaultValue="describe_rule_group_metadata"
    values={[
        { label: 'describe_rule_group_metadata', value: 'describe_rule_group_metadata' }
    ]}
>
<TabItem value="describe_rule_group_metadata">

High-level information about a rule group, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a rule group. You can retrieve all objects for a rule group by calling DescribeRuleGroup.

```sql
SELECT
capacity,
description,
last_modified_time,
listing_name,
product_id,
rule_group_arn,
rule_group_name,
stateful_rule_options,
type,
vendor_name
FROM aws.network_firewall.rule_group_metadatas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
