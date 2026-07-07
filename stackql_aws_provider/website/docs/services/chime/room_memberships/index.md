--- 
title: room_memberships
hide_title: false
hide_table_of_contents: false
keywords:
  - room_memberships
  - chime
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

Creates, updates, deletes, gets or lists a <code>room_memberships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="room_memberships" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime.room_memberships" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_room_memberships"
    values={[
        { label: 'list_room_memberships', value: 'list_room_memberships' }
    ]}
>
<TabItem value="list_room_memberships">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="RoomMemberships" /></td>
    <td><code>array</code></td>
    <td>The room membership details.</td>
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
    <td><a href="#list_room_memberships"><CopyableCode code="list_room_memberships" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-room_id"><code>room_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Lists the membership details for the specified room in an Amazon Chime Enterprise account, such as the members' IDs, email addresses, and names.</td>
</tr>
<tr>
    <td><a href="#create_room_membership"><CopyableCode code="create_room_membership" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-room_id"><code>room_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MemberId"><code>MemberId</code></a></td>
    <td></td>
    <td>Adds a member to a chat room in an Amazon Chime Enterprise account. A member can be either a user or a bot. The member role designates whether the member is a chat room administrator or a general chat room member.</td>
</tr>
<tr>
    <td><a href="#update_room_membership"><CopyableCode code="update_room_membership" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-room_id"><code>room_id</code></a>, <a href="#parameter-member_id"><code>member_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates room membership details, such as the member role, for a room in an Amazon Chime Enterprise account. The member role designates whether the member is a chat room administrator or a general chat room member. The member role can be updated only for user IDs.</td>
</tr>
<tr>
    <td><a href="#delete_room_membership"><CopyableCode code="delete_room_membership" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-room_id"><code>room_id</code></a>, <a href="#parameter-member_id"><code>member_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a member from a chat room in an Amazon Chime Enterprise account.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Chime account ID.</td>
</tr>
<tr id="parameter-member_id">
    <td><CopyableCode code="member_id" /></td>
    <td><code>string</code></td>
    <td>The member ID (user ID or bot ID).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-room_id">
    <td><CopyableCode code="room_id" /></td>
    <td><code>string</code></td>
    <td>The room ID.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_room_memberships"
    values={[
        { label: 'list_room_memberships', value: 'list_room_memberships' }
    ]}
>
<TabItem value="list_room_memberships">

Lists the membership details for the specified room in an Amazon Chime Enterprise account, such as the members' IDs, email addresses, and names.

```sql
SELECT
NextToken,
RoomMemberships
FROM aws.chime.room_memberships
WHERE account_id = '{{ account_id }}' -- required
AND room_id = '{{ room_id }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_room_membership"
    values={[
        { label: 'create_room_membership', value: 'create_room_membership' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_room_membership">

Adds a member to a chat room in an Amazon Chime Enterprise account. A member can be either a user or a bot. The member role designates whether the member is a chat room administrator or a general chat room member.

```sql
INSERT INTO aws.chime.room_memberships (
MemberId,
Role,
account_id,
room_id,
region
)
SELECT 
'{{ MemberId }}' /* required */,
'{{ Role }}',
'{{ account_id }}',
'{{ room_id }}',
'{{ region }}'
RETURNING
RoomMembership
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: room_memberships
  props:
    - name: account_id
      value: "{{ account_id }}"
      description: Required parameter for the room_memberships resource.
    - name: room_id
      value: "{{ room_id }}"
      description: Required parameter for the room_memberships resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the room_memberships resource.
    - name: MemberId
      value: "{{ MemberId }}"
    - name: Role
      value: "{{ Role }}"
      valid_values: ['Administrator', 'Member']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_room_membership"
    values={[
        { label: 'update_room_membership', value: 'update_room_membership' }
    ]}
>
<TabItem value="update_room_membership">

Updates room membership details, such as the member role, for a room in an Amazon Chime Enterprise account. The member role designates whether the member is a chat room administrator or a general chat room member. The member role can be updated only for user IDs.

```sql
UPDATE aws.chime.room_memberships
SET 
Role = '{{ Role }}'
WHERE 
account_id = '{{ account_id }}' --required
AND room_id = '{{ room_id }}' --required
AND member_id = '{{ member_id }}' --required
AND region = '{{ region }}' --required
RETURNING
RoomMembership;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_room_membership"
    values={[
        { label: 'delete_room_membership', value: 'delete_room_membership' }
    ]}
>
<TabItem value="delete_room_membership">

Removes a member from a chat room in an Amazon Chime Enterprise account.

```sql
DELETE FROM aws.chime.room_memberships
WHERE account_id = '{{ account_id }}' --required
AND room_id = '{{ room_id }}' --required
AND member_id = '{{ member_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
