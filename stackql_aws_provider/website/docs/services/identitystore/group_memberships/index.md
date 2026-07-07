--- 
title: group_memberships
hide_title: false
hide_table_of_contents: false
keywords:
  - group_memberships
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

Creates, updates, deletes, gets or lists a <code>group_memberships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="group_memberships" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.identitystore.group_memberships" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_group_membership"
    values={[
        { label: 'describe_group_membership', value: 'describe_group_membership' },
        { label: 'list_group_memberships', value: 'list_group_memberships' }
    ]}
>
<TabItem value="describe_group_membership">

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
    <td>The identifier for a GroupMembership in an identity store. (pattern: &lt;code&gt;(&#91;0-9a-f&#93;&#123;10&#125;-|)&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
<TabItem value="list_group_memberships">

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
    <td><a href="#describe_group_membership"><CopyableCode code="describe_group_membership" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves membership metadata and attributes from MembershipId in an identity store. If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the IAM Identity Center User Guide.</td>
</tr>
<tr>
    <td><a href="#list_group_memberships"><CopyableCode code="list_group_memberships" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>For the specified group in the specified identity store, returns the list of all GroupMembership objects and returns results in paginated form. If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the IAM Identity Center User Guide.</td>
</tr>
<tr>
    <td><a href="#create_group_membership"><CopyableCode code="create_group_membership" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentityStoreId"><code>IdentityStoreId</code></a>, <a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-MemberId"><code>MemberId</code></a></td>
    <td></td>
    <td>Creates a relationship between a member and a group. The following identifiers must be specified: GroupId, IdentityStoreId, and MemberId.</td>
</tr>
<tr>
    <td><a href="#delete_group_membership"><CopyableCode code="delete_group_membership" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a membership within a group given MembershipId.</td>
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
    defaultValue="describe_group_membership"
    values={[
        { label: 'describe_group_membership', value: 'describe_group_membership' },
        { label: 'list_group_memberships', value: 'list_group_memberships' }
    ]}
>
<TabItem value="describe_group_membership">

Retrieves membership metadata and attributes from MembershipId in an identity store. If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the IAM Identity Center User Guide.

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
FROM aws.identitystore.group_memberships
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_group_memberships">

For the specified group in the specified identity store, returns the list of all GroupMembership objects and returns results in paginated form. If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the IAM Identity Center User Guide.

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
FROM aws.identitystore.group_memberships
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_group_membership"
    values={[
        { label: 'create_group_membership', value: 'create_group_membership' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_group_membership">

Creates a relationship between a member and a group. The following identifiers must be specified: GroupId, IdentityStoreId, and MemberId.

```sql
INSERT INTO aws.identitystore.group_memberships (
IdentityStoreId,
GroupId,
MemberId,
region
)
SELECT 
'{{ IdentityStoreId }}' /* required */,
'{{ GroupId }}' /* required */,
'{{ MemberId }}' /* required */,
'{{ region }}'
RETURNING
IdentityStoreId,
MembershipId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: group_memberships
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the group_memberships resource.
    - name: IdentityStoreId
      value: "{{ IdentityStoreId }}"
      description: |
        The globally unique identifier for the identity store.
    - name: GroupId
      value: "{{ GroupId }}"
      description: |
        The identifier for a group in the identity store.
    - name: MemberId
      description: |
        An object that contains the identifier of a group member. Setting the UserID field to the specific identifier for a user indicates that the user is a member of the group.
      value:
        UserId: "{{ UserId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_group_membership"
    values={[
        { label: 'delete_group_membership', value: 'delete_group_membership' }
    ]}
>
<TabItem value="delete_group_membership">

Delete a membership within a group given MembershipId.

```sql
DELETE FROM aws.identitystore.group_memberships
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
