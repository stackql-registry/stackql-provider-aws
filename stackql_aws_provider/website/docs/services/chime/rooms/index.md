--- 
title: rooms
hide_title: false
hide_table_of_contents: false
keywords:
  - rooms
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

Creates, updates, deletes, gets or lists a <code>rooms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rooms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime.rooms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_room"
    values={[
        { label: 'get_room', value: 'get_room' },
        { label: 'list_rooms', value: 'list_rooms' }
    ]}
>
<TabItem value="get_room">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Chime account ID. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the room creator. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The room creation timestamp, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The room name.</td>
</tr>
<tr>
    <td><CopyableCode code="room_id" /></td>
    <td><code>string</code></td>
    <td>The room ID. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The room update timestamp, in ISO 8601 format.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_rooms">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="rooms" /></td>
    <td><code>array</code></td>
    <td>The room details.</td>
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
    <td><a href="#get_room"><CopyableCode code="get_room" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-room_id"><code>room_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves room details, such as the room name, for a room in an Amazon Chime Enterprise account.</td>
</tr>
<tr>
    <td><a href="#list_rooms"><CopyableCode code="list_rooms" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-member-id"><code>member-id</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Lists the room details for the specified Amazon Chime Enterprise account. Optionally, filter the results by a member ID (user ID or bot ID) to see a list of rooms that the member belongs to.</td>
</tr>
<tr>
    <td><a href="#create_room"><CopyableCode code="create_room" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Creates a chat room for the specified Amazon Chime Enterprise account.</td>
</tr>
<tr>
    <td><a href="#update_room"><CopyableCode code="update_room" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-room_id"><code>room_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates room details, such as the room name, for a room in an Amazon Chime Enterprise account.</td>
</tr>
<tr>
    <td><a href="#delete_room"><CopyableCode code="delete_room" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-room_id"><code>room_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a chat room in an Amazon Chime Enterprise account.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-room_id">
    <td><CopyableCode code="room_id" /></td>
    <td><code>string</code></td>
    <td>The chat room ID.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-member-id">
    <td><CopyableCode code="member-id" /></td>
    <td><code>string</code></td>
    <td>The member ID (user ID or bot ID).</td>
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
    defaultValue="get_room"
    values={[
        { label: 'get_room', value: 'get_room' },
        { label: 'list_rooms', value: 'list_rooms' }
    ]}
>
<TabItem value="get_room">

Retrieves room details, such as the room name, for a room in an Amazon Chime Enterprise account.

```sql
SELECT
account_id,
created_by,
created_timestamp,
name,
room_id,
updated_timestamp
FROM aws.chime.rooms
WHERE account_id = '{{ account_id }}' -- required
AND room_id = '{{ room_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_rooms">

Lists the room details for the specified Amazon Chime Enterprise account. Optionally, filter the results by a member ID (user ID or bot ID) to see a list of rooms that the member belongs to.

```sql
SELECT
next_token,
rooms
FROM aws.chime.rooms
WHERE account_id = '{{ account_id }}' -- required
AND region = '{{ region }}' -- required
AND `member-id` = '{{ member-id }}'
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_room"
    values={[
        { label: 'create_room', value: 'create_room' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_room">

Creates a chat room for the specified Amazon Chime Enterprise account.

```sql
INSERT INTO aws.chime.rooms (
Name,
ClientRequestToken,
account_id,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ ClientRequestToken }}',
'{{ account_id }}',
'{{ region }}'
RETURNING
room
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rooms
  props:
    - name: account_id
      value: "{{ account_id }}"
      description: Required parameter for the rooms resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rooms resource.
    - name: Name
      value: "{{ Name }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_room"
    values={[
        { label: 'update_room', value: 'update_room' }
    ]}
>
<TabItem value="update_room">

Updates room details, such as the room name, for a room in an Amazon Chime Enterprise account.

```sql
UPDATE aws.chime.rooms
SET 
Name = '{{ Name }}'
WHERE 
account_id = '{{ account_id }}' --required
AND room_id = '{{ room_id }}' --required
AND region = '{{ region }}' --required
RETURNING
room;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_room"
    values={[
        { label: 'delete_room', value: 'delete_room' }
    ]}
>
<TabItem value="delete_room">

Deletes a chat room in an Amazon Chime Enterprise account.

```sql
DELETE FROM aws.chime.rooms
WHERE account_id = '{{ account_id }}' --required
AND room_id = '{{ room_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
