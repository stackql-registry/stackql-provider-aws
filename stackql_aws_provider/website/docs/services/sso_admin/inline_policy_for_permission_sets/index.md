--- 
title: inline_policy_for_permission_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - inline_policy_for_permission_sets
  - sso_admin
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

Creates, updates, deletes, gets or lists an <code>inline_policy_for_permission_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inline_policy_for_permission_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso_admin.inline_policy_for_permission_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_inline_policy_for_permission_set"
    values={[
        { label: 'get_inline_policy_for_permission_set', value: 'get_inline_policy_for_permission_set' }
    ]}
>
<TabItem value="get_inline_policy_for_permission_set">

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
    <td><CopyableCode code="inline_policy" /></td>
    <td><code>string</code></td>
    <td>The inline policy that is attached to the permission set. For Length Constraints, if a valid ARN is provided for a permission set, it is possible for an empty inline policy to be returned. (pattern: &lt;code&gt;&#91;\u0009\u000A\u000D\u0020-\u00FF&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_inline_policy_for_permission_set"><CopyableCode code="get_inline_policy_for_permission_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Obtains the inline policy assigned to the permission set.</td>
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
    defaultValue="get_inline_policy_for_permission_set"
    values={[
        { label: 'get_inline_policy_for_permission_set', value: 'get_inline_policy_for_permission_set' }
    ]}
>
<TabItem value="get_inline_policy_for_permission_set">

Obtains the inline policy assigned to the permission set.

```sql
SELECT
inline_policy
FROM aws.sso_admin.inline_policy_for_permission_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
