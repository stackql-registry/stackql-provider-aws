--- 
title: role_memberships
hide_title: false
hide_table_of_contents: false
keywords:
  - role_memberships
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>role_memberships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="role_memberships" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.role_memberships" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_role_memberships"
    values={[
        { label: 'list_role_memberships', value: 'list_role_memberships' }
    ]}
>
<TabItem value="list_role_memberships">

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
    <td><CopyableCode code="members" /></td>
    <td><code>string</code></td>
    <td>The list of groups associated with a role</td>
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
    <td><a href="#list_role_memberships"><CopyableCode code="list_role_memberships" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-role"><code>role</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists all groups that are associated with a role.</td>
</tr>
<tr>
    <td><a href="#create_role_membership"><CopyableCode code="create_role_membership" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-member_name"><code>member_name</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-role"><code>role</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use CreateRoleMembership to add an existing Quick Sight group to an existing role.</td>
</tr>
<tr>
    <td><a href="#delete_role_membership"><CopyableCode code="delete_role_membership" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-member_name"><code>member_name</code></a>, <a href="#parameter-role"><code>role</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a group from a role.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon Quick Sight account.</td>
</tr>
<tr id="parameter-member_name">
    <td><CopyableCode code="member_name" /></td>
    <td><code>string</code></td>
    <td>The name of the group.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace that contains the role.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-role">
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The role that you want to remove permissions from.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>A pagination token that can be used in a subsequent request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_role_memberships"
    values={[
        { label: 'list_role_memberships', value: 'list_role_memberships' }
    ]}
>
<TabItem value="list_role_memberships">

Lists all groups that are associated with a role.

```sql
SELECT
members
FROM aws.quicksight.role_memberships
WHERE role = '{{ role }}' -- required
AND aws_account_id = '{{ aws_account_id }}' -- required
AND namespace = '{{ namespace }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_role_membership"
    values={[
        { label: 'create_role_membership', value: 'create_role_membership' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_role_membership">

Use CreateRoleMembership to add an existing Quick Sight group to an existing role.

```sql
INSERT INTO aws.quicksight.role_memberships (
member_name,
aws_account_id,
namespace,
role,
region
)
SELECT 
'{{ member_name }}',
'{{ aws_account_id }}',
'{{ namespace }}',
'{{ role }}',
'{{ region }}'
RETURNING
RequestId,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: role_memberships
  props:
    - name: member_name
      value: "{{ member_name }}"
      description: Required parameter for the role_memberships resource.
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the role_memberships resource.
    - name: namespace
      value: "{{ namespace }}"
      description: Required parameter for the role_memberships resource.
    - name: role
      value: "{{ role }}"
      description: Required parameter for the role_memberships resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the role_memberships resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_role_membership"
    values={[
        { label: 'delete_role_membership', value: 'delete_role_membership' }
    ]}
>
<TabItem value="delete_role_membership">

Removes a group from a role.

```sql
DELETE FROM aws.quicksight.role_memberships
WHERE member_name = '{{ member_name }}' --required
AND role = '{{ role }}' --required
AND aws_account_id = '{{ aws_account_id }}' --required
AND namespace = '{{ namespace }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
