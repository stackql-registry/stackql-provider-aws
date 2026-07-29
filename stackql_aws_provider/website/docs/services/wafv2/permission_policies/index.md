--- 
title: permission_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - permission_policies
  - wafv2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wafv2.permission_policies" /></td></tr>
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
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>The IAM policy that is attached to the specified rule group. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td>Returns the IAM policy that is attached to the specified rule group. You must be the owner of the rule group to perform this operation.</td>
</tr>
<tr>
    <td><a href="#put_permission_policy"><CopyableCode code="put_permission_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Use this to share a rule group with other accounts. This action attaches an IAM policy to the specified resource. You must be the owner of the rule group to perform this operation. This action is subject to the following restrictions: You can attach only one policy with each PutPermissionPolicy request. The ARN in the request must be a valid WAF RuleGroup ARN and the rule group must exist in the same Region. The user making the request must be the owner of the rule group. If a rule group has been shared with your account, you can access it through the call GetRuleGroup, and you can reference it in CreateWebACL and UpdateWebACL. Rule groups that are shared with you don't appear in your WAF console rule groups listing.</td>
</tr>
<tr>
    <td><a href="#delete_permission_policy"><CopyableCode code="delete_permission_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently deletes an IAM policy from the specified rule group. You must be the owner of the rule group to perform this operation.</td>
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

Returns the IAM policy that is attached to the specified rule group. You must be the owner of the rule group to perform this operation.

```sql
SELECT
policy
FROM aws.wafv2.permission_policies
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

Use this to share a rule group with other accounts. This action attaches an IAM policy to the specified resource. You must be the owner of the rule group to perform this operation. This action is subject to the following restrictions: You can attach only one policy with each PutPermissionPolicy request. The ARN in the request must be a valid WAF RuleGroup ARN and the rule group must exist in the same Region. The user making the request must be the owner of the rule group. If a rule group has been shared with your account, you can access it through the call GetRuleGroup, and you can reference it in CreateWebACL and UpdateWebACL. Rule groups that are shared with you don't appear in your WAF console rule groups listing.

```sql
REPLACE aws.wafv2.permission_policies
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

Permanently deletes an IAM policy from the specified rule group. You must be the owner of the rule group to perform this operation.

```sql
DELETE FROM aws.wafv2.permission_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
