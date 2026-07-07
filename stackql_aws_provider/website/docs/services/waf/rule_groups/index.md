--- 
title: rule_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - rule_groups
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

Creates, updates, deletes, gets or lists a <code>rule_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rule_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.waf.rule_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_rule_group"
    values={[
        { label: 'get_rule_group', value: 'get_rule_group' },
        { label: 'list_rule_groups', value: 'list_rule_groups' }
    ]}
>
<TabItem value="get_rule_group">

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
    <td>The friendly name or description for the RuleGroup. You can't change the name of a RuleGroup after you create it. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RuleGroupId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for a RuleGroup. You use RuleGroupId to get more information about a RuleGroup (see GetRuleGroup), update a RuleGroup (see UpdateRuleGroup), insert a RuleGroup into a WebACL or delete a one from a WebACL (see UpdateWebACL), or delete a RuleGroup from AWS WAF (see DeleteRuleGroup). RuleGroupId is returned by CreateRuleGroup and by ListRuleGroups. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_rule_groups">

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
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A friendly name or description of the RuleGroup. You can't change the name of a RuleGroup after you create it. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RuleGroupId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for a RuleGroup. You use RuleGroupId to get more information about a RuleGroup (see GetRuleGroup), update a RuleGroup (see UpdateRuleGroup), insert a RuleGroup into a WebACL or delete one from a WebACL (see UpdateWebACL), or delete a RuleGroup from AWS WAF (see DeleteRuleGroup). RuleGroupId is returned by CreateRuleGroup and by ListRuleGroups. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_rule_group"><CopyableCode code="get_rule_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the RuleGroup that is specified by the RuleGroupId that you included in the GetRuleGroup request. To view the rules in a rule group, use ListActivatedRulesInRuleGroup.</td>
</tr>
<tr>
    <td><a href="#list_rule_groups"><CopyableCode code="list_rule_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of RuleGroup objects.</td>
</tr>
<tr>
    <td><a href="#create_rule_group"><CopyableCode code="create_rule_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MetricName"><code>MetricName</code></a>, <a href="#parameter-ChangeToken"><code>ChangeToken</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Creates a RuleGroup. A rule group is a collection of predefined rules that you add to a web ACL. You use UpdateRuleGroup to add rules to the rule group. Rule groups are subject to the following limits: Three rule groups per account. You can request an increase to this limit by contacting customer support. One rule group per web ACL. Ten rules per rule group. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_rule_group"><CopyableCode code="update_rule_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleGroupId"><code>RuleGroupId</code></a>, <a href="#parameter-Updates"><code>Updates</code></a>, <a href="#parameter-ChangeToken"><code>ChangeToken</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Inserts or deletes ActivatedRule objects in a RuleGroup. You can only insert REGULAR rules into a rule group. You can have a maximum of ten rules per rule group. To create and configure a RuleGroup, perform the following steps: Create and update the Rules that you want to include in the RuleGroup. See CreateRule. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateRuleGroup request. Submit an UpdateRuleGroup request to add Rules to the RuleGroup. Create and update a WebACL that contains the RuleGroup. See CreateWebACL. If you want to replace one Rule with another, you delete the existing one and add the new one. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_rule_group"><CopyableCode code="delete_rule_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes a RuleGroup. You can't delete a RuleGroup if it's still used in any WebACL objects or if it still includes any rules. If you just want to remove a RuleGroup from a WebACL, use UpdateWebACL. To permanently delete a RuleGroup from AWS WAF, perform the following steps: Update the RuleGroup to remove rules, if any. For more information, see UpdateRuleGroup. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a DeleteRuleGroup request. Submit a DeleteRuleGroup request.</td>
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
    defaultValue="get_rule_group"
    values={[
        { label: 'get_rule_group', value: 'get_rule_group' },
        { label: 'list_rule_groups', value: 'list_rule_groups' }
    ]}
>
<TabItem value="get_rule_group">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the RuleGroup that is specified by the RuleGroupId that you included in the GetRuleGroup request. To view the rules in a rule group, use ListActivatedRulesInRuleGroup.

```sql
SELECT
MetricName,
Name,
RuleGroupId
FROM aws.waf.rule_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_rule_groups">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of RuleGroup objects.

```sql
SELECT
Name,
RuleGroupId
FROM aws.waf.rule_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rule_group"
    values={[
        { label: 'create_rule_group', value: 'create_rule_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rule_group">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Creates a RuleGroup. A rule group is a collection of predefined rules that you add to a web ACL. You use UpdateRuleGroup to add rules to the rule group. Rule groups are subject to the following limits: Three rule groups per account. You can request an increase to this limit by contacting customer support. One rule group per web ACL. Ten rules per rule group. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.

```sql
INSERT INTO aws.waf.rule_groups (
Name,
MetricName,
ChangeToken,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ MetricName }}' /* required */,
'{{ ChangeToken }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
ChangeToken,
RuleGroup
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rule_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rule_groups resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A friendly name or description of the RuleGroup. You can't change Name after you create a RuleGroup.
    - name: MetricName
      value: "{{ MetricName }}"
      description: |
        A friendly name or description for the metrics for this RuleGroup. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change the name of the metric after you create the RuleGroup.
    - name: ChangeToken
      value: "{{ ChangeToken }}"
      description: |
        The value returned by the most recent call to GetChangeToken.
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_rule_group"
    values={[
        { label: 'update_rule_group', value: 'update_rule_group' }
    ]}
>
<TabItem value="update_rule_group">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Inserts or deletes ActivatedRule objects in a RuleGroup. You can only insert REGULAR rules into a rule group. You can have a maximum of ten rules per rule group. To create and configure a RuleGroup, perform the following steps: Create and update the Rules that you want to include in the RuleGroup. See CreateRule. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateRuleGroup request. Submit an UpdateRuleGroup request to add Rules to the RuleGroup. Create and update a WebACL that contains the RuleGroup. See CreateWebACL. If you want to replace one Rule with another, you delete the existing one and add the new one. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.

```sql
UPDATE aws.waf.rule_groups
SET 
RuleGroupId = '{{ RuleGroupId }}',
Updates = '{{ Updates }}',
ChangeToken = '{{ ChangeToken }}'
WHERE 
region = '{{ region }}' --required
AND RuleGroupId = '{{ RuleGroupId }}' --required
AND Updates = '{{ Updates }}' --required
AND ChangeToken = '{{ ChangeToken }}' --required
RETURNING
ChangeToken;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rule_group"
    values={[
        { label: 'delete_rule_group', value: 'delete_rule_group' }
    ]}
>
<TabItem value="delete_rule_group">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes a RuleGroup. You can't delete a RuleGroup if it's still used in any WebACL objects or if it still includes any rules. If you just want to remove a RuleGroup from a WebACL, use UpdateWebACL. To permanently delete a RuleGroup from AWS WAF, perform the following steps: Update the RuleGroup to remove rules, if any. For more information, see UpdateRuleGroup. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a DeleteRuleGroup request. Submit a DeleteRuleGroup request.

```sql
DELETE FROM aws.waf.rule_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
