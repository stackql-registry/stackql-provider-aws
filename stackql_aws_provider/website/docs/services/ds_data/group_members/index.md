--- 
title: group_members
hide_title: false
hide_table_of_contents: false
keywords:
  - group_members
  - ds_data
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

Creates, updates, deletes, gets or lists a <code>group_members</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="group_members" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds_data.group_members" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_group_members"
    values={[
        { label: 'list_group_members', value: 'list_group_members' }
    ]}
>
<TabItem value="list_group_members">

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
    <td><CopyableCode code="MemberType" /></td>
    <td><code>string</code></td>
    <td>The AD type of the member object. (USER, GROUP, COMPUTER)</td>
</tr>
<tr>
    <td><CopyableCode code="SAMAccountName" /></td>
    <td><code>string</code></td>
    <td>The name of the group member. (pattern: &lt;code&gt;^&#91;^:;|=+"*?&lt;&gt;/\\,\&#91;\&#93;@&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SID" /></td>
    <td><code>string</code></td>
    <td>The unique security identifier (SID) of the group member.</td>
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
    <td><a href="#list_group_members"><CopyableCode code="list_group_members" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns member information for the specified group. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the ListGroupMembers.NextToken member contains a token that you pass in the next call to ListGroupMembers. This retrieves the next set of items. You can also specify a maximum number of return results with the MaxResults parameter.</td>
</tr>
<tr>
    <td><a href="#add_group_member"><CopyableCode code="add_group_member" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-MemberName"><code>MemberName</code></a></td>
    <td></td>
    <td>Adds an existing user, group, or computer as a group member.</td>
</tr>
<tr>
    <td><a href="#remove_group_member"><CopyableCode code="remove_group_member" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-MemberName"><code>MemberName</code></a></td>
    <td></td>
    <td>Removes a member from a group.</td>
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
<tr id="parameter-DirectoryId">
    <td><CopyableCode code="DirectoryId" /></td>
    <td><code>string</code></td>
    <td>The identifier (ID) of the directory that's associated with the member.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_group_members"
    values={[
        { label: 'list_group_members', value: 'list_group_members' }
    ]}
>
<TabItem value="list_group_members">

Returns member information for the specified group. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the ListGroupMembers.NextToken member contains a token that you pass in the next call to ListGroupMembers. This retrieves the next set of items. You can also specify a maximum number of return results with the MaxResults parameter.

```sql
SELECT
MemberType,
SAMAccountName,
SID
FROM aws.ds_data.group_members
WHERE DirectoryId = '{{ DirectoryId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_group_member"
    values={[
        { label: 'add_group_member', value: 'add_group_member' }
    ]}
>
<TabItem value="add_group_member">

Adds an existing user, group, or computer as a group member.

```sql
UPDATE aws.ds_data.group_members
SET 
ClientToken = '{{ ClientToken }}',
GroupName = '{{ GroupName }}',
MemberName = '{{ MemberName }}',
MemberRealm = '{{ MemberRealm }}'
WHERE 
DirectoryId = '{{ DirectoryId }}' --required
AND region = '{{ region }}' --required
AND GroupName = '{{ GroupName }}' --required
AND MemberName = '{{ MemberName }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="remove_group_member"
    values={[
        { label: 'remove_group_member', value: 'remove_group_member' }
    ]}
>
<TabItem value="remove_group_member">

Removes a member from a group.

```sql
EXEC aws.ds_data.group_members.remove_group_member 
@DirectoryId='{{ DirectoryId }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ClientToken": "{{ ClientToken }}", 
"GroupName": "{{ GroupName }}", 
"MemberName": "{{ MemberName }}", 
"MemberRealm": "{{ MemberRealm }}"
}'
;
```
</TabItem>
</Tabs>
