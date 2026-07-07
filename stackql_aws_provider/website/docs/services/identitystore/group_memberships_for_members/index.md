--- 
title: group_memberships_for_members
hide_title: false
hide_table_of_contents: false
keywords:
  - group_memberships_for_members
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

Creates, updates, deletes, gets or lists a <code>group_memberships_for_members</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="group_memberships_for_members" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.identitystore.group_memberships_for_members" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_group_memberships_for_member"
    values={[
        { label: 'list_group_memberships_for_member', value: 'list_group_memberships_for_member' }
    ]}
>
<TabItem value="list_group_memberships_for_member">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the group membership was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that created the group membership.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupId" /></td>
    <td><code>string</code></td>
    <td>The identifier for a group in the identity store. (pattern: &lt;code&gt;(&#91;0-9a-f&#93;&#123;10&#125;-|)&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityStoreId" /></td>
    <td><code>string</code></td>
    <td>The globally unique identifier for the identity store. (pattern: &lt;code&gt;d-&#91;0-9a-f&#93;&#123;10&#125;$|^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MemberId" /></td>
    <td><code>object</code></td>
    <td>An object containing the identifier of a group member.</td>
</tr>
<tr>
    <td><CopyableCode code="MembershipId" /></td>
    <td><code>string</code></td>
    <td>The identifier for a GroupMembership object in an identity store. (pattern: &lt;code&gt;(&#91;0-9a-f&#93;&#123;10&#125;-|)&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the group membership was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedBy" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that last updated the group membership.</td>
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
    <td><a href="#list_group_memberships_for_member"><CopyableCode code="list_group_memberships_for_member" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>For the specified member in the specified identity store, returns the list of all GroupMembership objects and returns results in paginated form. If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the IAM Identity Center User Guide.</td>
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
    defaultValue="list_group_memberships_for_member"
    values={[
        { label: 'list_group_memberships_for_member', value: 'list_group_memberships_for_member' }
    ]}
>
<TabItem value="list_group_memberships_for_member">

For the specified member in the specified identity store, returns the list of all GroupMembership objects and returns results in paginated form. If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the IAM Identity Center User Guide.

```sql
SELECT
CreatedAt,
CreatedBy,
GroupId,
IdentityStoreId,
MemberId,
MembershipId,
UpdatedAt,
UpdatedBy
FROM aws.identitystore.group_memberships_for_members
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
