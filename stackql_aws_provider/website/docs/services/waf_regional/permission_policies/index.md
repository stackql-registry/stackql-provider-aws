--- 
title: permission_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - permission_policies
  - waf_regional
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

Creates, updates, deletes, gets or lists a <code>permission_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="permission_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.waf_regional.permission_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_permission_policy"
    values={[
        { label: 'get_permission_policy', value: 'get_permission_policy' }
    ]}
>
<TabItem value="get_permission_policy">

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
    <td><CopyableCode code="Policy" /></td>
    <td><code>string</code></td>
    <td>The IAM policy attached to the specified RuleGroup. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_permission_policy"><CopyableCode code="get_permission_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the IAM policy attached to the RuleGroup.</td>
</tr>
<tr>
    <td><a href="#put_permission_policy"><CopyableCode code="put_permission_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Attaches an IAM policy to the specified resource. The only supported use for this action is to share a RuleGroup across accounts. The PutPermissionPolicy is subject to the following restrictions: You can attach only one policy with each PutPermissionPolicy request. The policy must include an Effect, Action and Principal. Effect must specify Allow. The Action in the policy must be waf:UpdateWebACL, waf-regional:UpdateWebACL, waf:GetRuleGroup and waf-regional:GetRuleGroup . Any extra or wildcard actions in the policy will be rejected. The policy cannot include a Resource parameter. The ARN in the request must be a valid WAF RuleGroup ARN and the RuleGroup must exist in the same region. The user making the request must be the owner of the RuleGroup. Your policy must be composed using IAM Policy version 2012-10-17. For more information, see IAM Policies. An example of a valid policy parameter is shown in the Examples section below.</td>
</tr>
<tr>
    <td><a href="#delete_permission_policy"><CopyableCode code="delete_permission_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes an IAM policy from the specified RuleGroup. The user making the request must be the owner of the RuleGroup.</td>
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
    defaultValue="get_permission_policy"
    values={[
        { label: 'get_permission_policy', value: 'get_permission_policy' }
    ]}
>
<TabItem value="get_permission_policy">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the IAM policy attached to the RuleGroup.

```sql
SELECT
Policy
FROM aws.waf_regional.permission_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_permission_policy"
    values={[
        { label: 'put_permission_policy', value: 'put_permission_policy' }
    ]}
>
<TabItem value="put_permission_policy">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Attaches an IAM policy to the specified resource. The only supported use for this action is to share a RuleGroup across accounts. The PutPermissionPolicy is subject to the following restrictions: You can attach only one policy with each PutPermissionPolicy request. The policy must include an Effect, Action and Principal. Effect must specify Allow. The Action in the policy must be waf:UpdateWebACL, waf-regional:UpdateWebACL, waf:GetRuleGroup and waf-regional:GetRuleGroup . Any extra or wildcard actions in the policy will be rejected. The policy cannot include a Resource parameter. The ARN in the request must be a valid WAF RuleGroup ARN and the RuleGroup must exist in the same region. The user making the request must be the owner of the RuleGroup. Your policy must be composed using IAM Policy version 2012-10-17. For more information, see IAM Policies. An example of a valid policy parameter is shown in the Examples section below.

```sql
REPLACE aws.waf_regional.permission_policies
SET 
ResourceArn = '{{ ResourceArn }}',
Policy = '{{ Policy }}'
WHERE 
region = '{{ region }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_permission_policy"
    values={[
        { label: 'delete_permission_policy', value: 'delete_permission_policy' }
    ]}
>
<TabItem value="delete_permission_policy">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes an IAM policy from the specified RuleGroup. The user making the request must be the owner of the RuleGroup.

```sql
DELETE FROM aws.waf_regional.permission_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
