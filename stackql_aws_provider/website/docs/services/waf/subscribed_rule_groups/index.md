--- 
title: subscribed_rule_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - subscribed_rule_groups
  - waf
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

Creates, updates, deletes, gets or lists a <code>subscribed_rule_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subscribed_rule_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.waf.subscribed_rule_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_subscribed_rule_groups"
    values={[
        { label: 'list_subscribed_rule_groups', value: 'list_subscribed_rule_groups' }
    ]}
>
<TabItem value="list_subscribed_rule_groups">

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
    <td><CopyableCode code="MetricName" /></td>
    <td><code>string</code></td>
    <td>A friendly name or description for the metrics for this RuleGroup. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change the name of the metric after you create the RuleGroup. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A friendly name or description of the RuleGroup. You can't change the name of a RuleGroup after you create it. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RuleGroupId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for a RuleGroup. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#list_subscribed_rule_groups"><CopyableCode code="list_subscribed_rule_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of RuleGroup objects that you are subscribed to.</td>
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
    defaultValue="list_subscribed_rule_groups"
    values={[
        { label: 'list_subscribed_rule_groups', value: 'list_subscribed_rule_groups' }
    ]}
>
<TabItem value="list_subscribed_rule_groups">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of RuleGroup objects that you are subscribed to.

```sql
SELECT
MetricName,
Name,
RuleGroupId
FROM aws.waf.subscribed_rule_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
