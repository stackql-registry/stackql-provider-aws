--- 
title: groups
hide_title: false
hide_table_of_contents: false
keywords:
  - groups
  - workmail
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

Creates, updates, deletes, gets or lists a <code>groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_group"
    values={[
        { label: 'describe_group', value: 'describe_group' },
        { label: 'list_groups', value: 'list_groups' }
    ]}
>
<TabItem value="describe_group">

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
    <td><CopyableCode code="disabled_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when a user was deregistered from WorkMail, in UNIX epoch time format.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The email of the described group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9._%+-&#93;&#123;1,64&#125;@&#91;a-zA-Z0-9.-&#93;+\.&#91;a-zA-Z-&#93;&#123;2,&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when a user was registered to WorkMail, in UNIX epoch time format.</td>
</tr>
<tr>
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the described group.</td>
</tr>
<tr>
    <td><CopyableCode code="hidden_from_global_address_list" /></td>
    <td><code>boolean</code></td>
    <td>If the value is set to true, the group is hidden from the address book.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the described group. (pattern: &lt;code&gt;&#91;\u0020-\u00FF&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the user: enabled (registered to WorkMail) or disabled (deregistered or never registered to WorkMail). (ENABLED, DISABLED, DELETED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_groups">

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
    <td><CopyableCode code="disabled_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date indicating when the group was disabled from WorkMail use.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The email of the group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9._%+-&#93;&#123;1,64&#125;@&#91;a-zA-Z0-9.-&#93;+\.&#91;a-zA-Z-&#93;&#123;2,&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date indicating when the group was enabled for WorkMail use.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the group.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the group. (pattern: &lt;code&gt;&#91;\u0020-\u00FF&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the group, which can be ENABLED, DISABLED, or DELETED. (ENABLED, DISABLED, DELETED)</td>
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
    <td><a href="#describe_group"><CopyableCode code="describe_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the data available for the group.</td>
</tr>
<tr>
    <td><a href="#list_groups"><CopyableCode code="list_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns summaries of the organization's groups.</td>
</tr>
<tr>
    <td><a href="#create_group"><CopyableCode code="create_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a></td>
    <td></td>
    <td>Creates a group that can be used in WorkMail by calling the RegisterToWorkMail operation.</td>
</tr>
<tr>
    <td><a href="#associate_member_to_group"><CopyableCode code="associate_member_to_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-MemberId"><code>MemberId</code></a></td>
    <td></td>
    <td>Adds a member (user or group) to the group's set.</td>
</tr>
<tr>
    <td><a href="#update_group"><CopyableCode code="update_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-GroupId"><code>GroupId</code></a></td>
    <td></td>
    <td>Updates attributes in a group.</td>
</tr>
<tr>
    <td><a href="#delete_group"><CopyableCode code="delete_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a group from WorkMail.</td>
</tr>
<tr>
    <td><a href="#disassociate_member_from_group"><CopyableCode code="disassociate_member_from_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-MemberId"><code>MemberId</code></a></td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_group"
    values={[
        { label: 'describe_group', value: 'describe_group' },
        { label: 'list_groups', value: 'list_groups' }
    ]}
>
<TabItem value="describe_group">

Returns the data available for the group.

```sql
SELECT
disabled_date,
email,
enabled_date,
group_id,
hidden_from_global_address_list,
name,
state
FROM aws.workmail.groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_groups">

Returns summaries of the organization's groups.

```sql
SELECT
disabled_date,
email,
enabled_date,
id,
name,
state
FROM aws.workmail.groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_group"
    values={[
        { label: 'create_group', value: 'create_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_group">

Creates a group that can be used in WorkMail by calling the RegisterToWorkMail operation.

```sql
INSERT INTO aws.workmail.groups (
OrganizationId,
Name,
HiddenFromGlobalAddressList,
region
)
SELECT 
'{{ OrganizationId }}' /* required */,
'{{ Name }}',
{{ HiddenFromGlobalAddressList }},
'{{ region }}'
RETURNING
group_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the groups resource.
    - name: OrganizationId
      value: "{{ OrganizationId }}"
      description: |
        The organization under which the group is to be created.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the group.
    - name: HiddenFromGlobalAddressList
      value: {{ HiddenFromGlobalAddressList }}
      description: |
        If this parameter is enabled, the group will be hidden from the address book.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_member_to_group"
    values={[
        { label: 'associate_member_to_group', value: 'associate_member_to_group' },
        { label: 'update_group', value: 'update_group' }
    ]}
>
<TabItem value="associate_member_to_group">

Adds a member (user or group) to the group's set.

```sql
UPDATE aws.workmail.groups
SET 
OrganizationId = '{{ OrganizationId }}',
GroupId = '{{ GroupId }}',
MemberId = '{{ MemberId }}'
WHERE 
region = '{{ region }}' --required
AND OrganizationId = '{{ OrganizationId }}' --required
AND GroupId = '{{ GroupId }}' --required
AND MemberId = '{{ MemberId }}' --required;
```
</TabItem>
<TabItem value="update_group">

Updates attributes in a group.

```sql
UPDATE aws.workmail.groups
SET 
OrganizationId = '{{ OrganizationId }}',
GroupId = '{{ GroupId }}',
HiddenFromGlobalAddressList = {{ HiddenFromGlobalAddressList }}
WHERE 
region = '{{ region }}' --required
AND OrganizationId = '{{ OrganizationId }}' --required
AND GroupId = '{{ GroupId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_group"
    values={[
        { label: 'delete_group', value: 'delete_group' }
    ]}
>
<TabItem value="delete_group">

Deletes a group from WorkMail.

```sql
DELETE FROM aws.workmail.groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_member_from_group"
    values={[
        { label: 'disassociate_member_from_group', value: 'disassociate_member_from_group' }
    ]}
>
<TabItem value="disassociate_member_from_group">

Removes a member from a group.

```sql
EXEC aws.workmail.groups.disassociate_member_from_group 
@region='{{ region }}' --required 
@@json=
'{
"OrganizationId": "{{ OrganizationId }}", 
"GroupId": "{{ GroupId }}", 
"MemberId": "{{ MemberId }}"
}'
;
```
</TabItem>
</Tabs>
