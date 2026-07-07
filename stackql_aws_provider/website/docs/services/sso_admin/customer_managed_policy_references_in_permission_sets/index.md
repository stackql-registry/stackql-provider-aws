--- 
title: customer_managed_policy_references_in_permission_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - customer_managed_policy_references_in_permission_sets
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

Creates, updates, deletes, gets or lists a <code>customer_managed_policy_references_in_permission_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="customer_managed_policy_references_in_permission_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso_admin.customer_managed_policy_references_in_permission_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_customer_managed_policy_references_in_permission_set"
    values={[
        { label: 'list_customer_managed_policy_references_in_permission_set', value: 'list_customer_managed_policy_references_in_permission_set' }
    ]}
>
<TabItem value="list_customer_managed_policy_references_in_permission_set">

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
    <td>The name of the IAM policy that you have configured in each account where you want to deploy your permission set. (pattern: &lt;code&gt;&#91;\w+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Path" /></td>
    <td><code>string</code></td>
    <td>The path to the IAM policy that you have configured in each account where you want to deploy your permission set. The default is /. For more information, see Friendly names and paths in the IAM User Guide. (pattern: &lt;code&gt;((/&#91;A-Za-z0-9\.,\+@=_-&#93;+)*)/&lt;/code&gt;)</td>
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
    <td><a href="#list_customer_managed_policy_references_in_permission_set"><CopyableCode code="list_customer_managed_policy_references_in_permission_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all customer managed policies attached to a specified PermissionSet.</td>
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
    defaultValue="list_customer_managed_policy_references_in_permission_set"
    values={[
        { label: 'list_customer_managed_policy_references_in_permission_set', value: 'list_customer_managed_policy_references_in_permission_set' }
    ]}
>
<TabItem value="list_customer_managed_policy_references_in_permission_set">

Lists all customer managed policies attached to a specified PermissionSet.

```sql
SELECT
Name,
Path
FROM aws.sso_admin.customer_managed_policy_references_in_permission_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
