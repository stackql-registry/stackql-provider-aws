--- 
title: group_memberships
hide_title: false
hide_table_of_contents: false
keywords:
  - group_memberships
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

Creates, updates, deletes, gets or lists a <code>group_memberships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="group_memberships" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.group_memberships" /></td></tr>
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
    <td><CopyableCode code="group_member" /></td>
    <td><code>object</code></td>
    <td>A member of an Quick Sight group. Currently, group members must be users. Groups can't be members of another group. .</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the group member (user).</td>
</tr>
<tr>
    <td><CopyableCode code="member_name" /></td>
    <td><code>string</code></td>
    <td>The name of the group member (user). (pattern: &lt;code&gt;&#91;\u0020-\u00FF&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#parameter-member_name"><code>member_name</code></a>, <a href="#parameter-group_name"><code>group_name</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use the DescribeGroupMembership operation to determine if a user is a member of the specified group. If the user exists and is a member of the specified group, an associated GroupMember object is returned.</td>
</tr>
<tr>
    <td><a href="#list_group_memberships"><CopyableCode code="list_group_memberships" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-group_name"><code>group_name</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists member users in a group.</td>
</tr>
<tr>
    <td><a href="#create_group_membership"><CopyableCode code="create_group_membership" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-member_name"><code>member_name</code></a>, <a href="#parameter-group_name"><code>group_name</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds an Amazon Quick Sight user to an Amazon Quick Sight group.</td>
</tr>
<tr>
    <td><a href="#delete_group_membership"><CopyableCode code="delete_group_membership" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-member_name"><code>member_name</code></a>, <a href="#parameter-group_name"><code>group_name</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a user from a group so that the user is no longer a member of the group.</td>
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
    <td>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon Quick Sight account.</td>
</tr>
<tr id="parameter-group_name">
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the group that you want to delete the user from.</td>
</tr>
<tr id="parameter-member_name">
    <td><CopyableCode code="member_name" /></td>
    <td><code>string</code></td>
    <td>The name of the user that you want to delete from the group membership.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the group that you want to remove a user from.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return from this request.</td>
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
    defaultValue="describe_group_membership"
    values={[
        { label: 'describe_group_membership', value: 'describe_group_membership' },
        { label: 'list_group_memberships', value: 'list_group_memberships' }
    ]}
>
<TabItem value="describe_group_membership">

Use the DescribeGroupMembership operation to determine if a user is a member of the specified group. If the user exists and is a member of the specified group, an associated GroupMember object is returned.

```sql
SELECT
group_member,
request_id,
status
FROM aws.quicksight.group_memberships
WHERE member_name = '{{ member_name }}' -- required
AND group_name = '{{ group_name }}' -- required
AND aws_account_id = '{{ aws_account_id }}' -- required
AND namespace = '{{ namespace }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_group_memberships">

Lists member users in a group.

```sql
SELECT
arn,
member_name
FROM aws.quicksight.group_memberships
WHERE group_name = '{{ group_name }}' -- required
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
    defaultValue="create_group_membership"
    values={[
        { label: 'create_group_membership', value: 'create_group_membership' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_group_membership">

Adds an Amazon Quick Sight user to an Amazon Quick Sight group.

```sql
INSERT INTO aws.quicksight.group_memberships (
member_name,
group_name,
aws_account_id,
namespace,
region
)
SELECT 
'{{ member_name }}',
'{{ group_name }}',
'{{ aws_account_id }}',
'{{ namespace }}',
'{{ region }}'
RETURNING
group_member,
request_id,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: group_memberships
  props:
    - name: member_name
      value: "{{ member_name }}"
      description: Required parameter for the group_memberships resource.
    - name: group_name
      value: "{{ group_name }}"
      description: Required parameter for the group_memberships resource.
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the group_memberships resource.
    - name: namespace
      value: "{{ namespace }}"
      description: Required parameter for the group_memberships resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the group_memberships resource.
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

Removes a user from a group so that the user is no longer a member of the group.

```sql
DELETE FROM aws.quicksight.group_memberships
WHERE member_name = '{{ member_name }}' --required
AND group_name = '{{ group_name }}' --required
AND aws_account_id = '{{ aws_account_id }}' --required
AND namespace = '{{ namespace }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
