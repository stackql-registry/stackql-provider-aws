--- 
title: permissions_boundary_for_permission_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - permissions_boundary_for_permission_sets
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

Creates, updates, deletes, gets or lists a <code>permissions_boundary_for_permission_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="permissions_boundary_for_permission_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso_admin.permissions_boundary_for_permission_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_permissions_boundary_for_permission_set"
    values={[
        { label: 'get_permissions_boundary_for_permission_set', value: 'get_permissions_boundary_for_permission_set' }
    ]}
>
<TabItem value="get_permissions_boundary_for_permission_set">

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
    <td><CopyableCode code="customer_managed_policy_reference" /></td>
    <td><code>object</code></td>
    <td>Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each Amazon Web Services account where you want to deploy your permission set.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services managed policy ARN that you want to attach to a permission set as a permissions boundary. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;&#123;1,5&#125;)&#123;0,3&#125;:iam::aws:policy((/&#91;A-Za-z0-9\.,\+@=_-&#93;+)*)/(&#91;A-Za-z0-9\.,\+=@_-&#93;+)&lt;/code&gt;)</td>
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
    <td><a href="#get_permissions_boundary_for_permission_set"><CopyableCode code="get_permissions_boundary_for_permission_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Obtains the permissions boundary for a specified PermissionSet.</td>
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
    defaultValue="get_permissions_boundary_for_permission_set"
    values={[
        { label: 'get_permissions_boundary_for_permission_set', value: 'get_permissions_boundary_for_permission_set' }
    ]}
>
<TabItem value="get_permissions_boundary_for_permission_set">

Obtains the permissions boundary for a specified PermissionSet.

```sql
SELECT
customer_managed_policy_reference,
managed_policy_arn
FROM aws.sso_admin.permissions_boundary_for_permission_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
