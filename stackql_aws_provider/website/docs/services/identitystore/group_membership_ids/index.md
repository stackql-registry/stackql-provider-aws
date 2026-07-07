--- 
title: group_membership_ids
hide_title: false
hide_table_of_contents: false
keywords:
  - group_membership_ids
  - identitystore
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

Creates, updates, deletes, gets or lists a <code>group_membership_ids</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="group_membership_ids" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.identitystore.group_membership_ids" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_group_membership_id"
    values={[
        { label: 'get_group_membership_id', value: 'get_group_membership_id' }
    ]}
>
<TabItem value="get_group_membership_id">

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
    <td><CopyableCode code="IdentityStoreId" /></td>
    <td><code>string</code></td>
    <td>The globally unique identifier for the identity store. (pattern: &lt;code&gt;d-&#91;0-9a-f&#93;&#123;10&#125;$|^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MembershipId" /></td>
    <td><code>string</code></td>
    <td>The identifier for a GroupMembership in an identity store. (pattern: &lt;code&gt;(&#91;0-9a-f&#93;&#123;10&#125;-|)&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_group_membership_id"><CopyableCode code="get_group_membership_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the MembershipId in an identity store. If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the IAM Identity Center User Guide.</td>
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
    defaultValue="get_group_membership_id"
    values={[
        { label: 'get_group_membership_id', value: 'get_group_membership_id' }
    ]}
>
<TabItem value="get_group_membership_id">

Retrieves the MembershipId in an identity store. If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the IAM Identity Center User Guide.

```sql
SELECT
IdentityStoreId,
MembershipId
FROM aws.identitystore.group_membership_ids
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
