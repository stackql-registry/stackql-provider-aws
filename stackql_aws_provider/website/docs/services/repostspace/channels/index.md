--- 
title: channels
hide_title: false
hide_table_of_contents: false
keywords:
  - channels
  - repostspace
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

Creates, updates, deletes, gets or lists a <code>channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="channels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.repostspace.channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_channel"
    values={[
        { label: 'get_channel', value: 'get_channel' },
        { label: 'list_channels', value: 'list_channels' }
    ]}
>
<TabItem value="get_channel">

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
    <td><CopyableCode code="channel_description" /></td>
    <td><code>string</code></td>
    <td>A description for the channel. This is used only to help you identify this channel.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the private re:Post channel.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_name" /></td>
    <td><code>string</code></td>
    <td>The name for the channel. This must be unique per private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_roles" /></td>
    <td><code>object</code></td>
    <td>The channel roles associated to the users and groups of the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_status" /></td>
    <td><code>string</code></td>
    <td>The status pf the channel. (CREATED, CREATING, CREATE_FAILED, DELETED, DELETING, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="create_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the channel was created.</td>
</tr>
<tr>
    <td><CopyableCode code="delete_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the channel was deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="space_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the private re:Post.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_channels">

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
    <td><CopyableCode code="channel_description" /></td>
    <td><code>string</code></td>
    <td>A description for the channel. This is used only to help you identify this channel.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the private re:Post channel.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_name" /></td>
    <td><code>string</code></td>
    <td>The name for the channel. This must be unique per private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_status" /></td>
    <td><code>string</code></td>
    <td>The status pf the channel. (CREATED, CREATING, CREATE_FAILED, DELETED, DELETING, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="create_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the channel was created.</td>
</tr>
<tr>
    <td><CopyableCode code="delete_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the channel was deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="group_count" /></td>
    <td><code>integer</code></td>
    <td>The number of groups that are part of the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="space_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="user_count" /></td>
    <td><code>integer</code></td>
    <td>The number of users that are part of the channel.</td>
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
    <td><a href="#get_channel"><CopyableCode code="get_channel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-space_id"><code>space_id</code></a>, <a href="#parameter-channel_id"><code>channel_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays information about a channel in a private re:Post.</td>
</tr>
<tr>
    <td><a href="#list_channels"><CopyableCode code="list_channels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-space_id"><code>space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns the list of channel within a private re:Post with some information about each channel.</td>
</tr>
<tr>
    <td><a href="#create_channel"><CopyableCode code="create_channel" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-space_id"><code>space_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-channelName"><code>channelName</code></a></td>
    <td></td>
    <td>Creates a channel in an AWS re:Post Private private re:Post.</td>
</tr>
<tr>
    <td><a href="#update_channel"><CopyableCode code="update_channel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-space_id"><code>space_id</code></a>, <a href="#parameter-channel_id"><code>channel_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-channelName"><code>channelName</code></a></td>
    <td></td>
    <td>Modifies an existing channel.</td>
</tr>
<tr>
    <td><a href="#batch_add_channel_role_to_accessors"><CopyableCode code="batch_add_channel_role_to_accessors" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-space_id"><code>space_id</code></a>, <a href="#parameter-channel_id"><code>channel_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-accessorIds"><code>accessorIds</code></a>, <a href="#parameter-channelRole"><code>channelRole</code></a></td>
    <td></td>
    <td>Add role to multiple users or groups in a private re:Post channel.</td>
</tr>
<tr>
    <td><a href="#batch_remove_channel_role_from_accessors"><CopyableCode code="batch_remove_channel_role_from_accessors" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-space_id"><code>space_id</code></a>, <a href="#parameter-channel_id"><code>channel_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-accessorIds"><code>accessorIds</code></a>, <a href="#parameter-channelRole"><code>channelRole</code></a></td>
    <td></td>
    <td>Remove a role from multiple users or groups in a private re:Post channel.</td>
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
<tr id="parameter-channel_id">
    <td><CopyableCode code="channel_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the private re:Post channel.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-space_id">
    <td><CopyableCode code="space_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the private re:Post.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of channels to include in the results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of channel to return. You receive this token from a previous ListChannels operation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_channel"
    values={[
        { label: 'get_channel', value: 'get_channel' },
        { label: 'list_channels', value: 'list_channels' }
    ]}
>
<TabItem value="get_channel">

Displays information about a channel in a private re:Post.

```sql
SELECT
channel_description,
channel_id,
channel_name,
channel_roles,
channel_status,
create_date_time,
delete_date_time,
space_id
FROM aws.repostspace.channels
WHERE space_id = '{{ space_id }}' -- required
AND channel_id = '{{ channel_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_channels">

Returns the list of channel within a private re:Post with some information about each channel.

```sql
SELECT
channel_description,
channel_id,
channel_name,
channel_status,
create_date_time,
delete_date_time,
group_count,
space_id,
user_count
FROM aws.repostspace.channels
WHERE space_id = '{{ space_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_channel"
    values={[
        { label: 'create_channel', value: 'create_channel' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_channel">

Creates a channel in an AWS re:Post Private private re:Post.

```sql
INSERT INTO aws.repostspace.channels (
channelName,
channelDescription,
space_id,
region
)
SELECT 
'{{ channelName }}' /* required */,
'{{ channelDescription }}',
'{{ space_id }}',
'{{ region }}'
RETURNING
channel_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: channels
  props:
    - name: space_id
      value: "{{ space_id }}"
      description: Required parameter for the channels resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the channels resource.
    - name: channelName
      value: "{{ channelName }}"
    - name: channelDescription
      value: "{{ channelDescription }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_channel"
    values={[
        { label: 'update_channel', value: 'update_channel' }
    ]}
>
<TabItem value="update_channel">

Modifies an existing channel.

```sql
UPDATE aws.repostspace.channels
SET 
channelName = '{{ channelName }}',
channelDescription = '{{ channelDescription }}'
WHERE 
space_id = '{{ space_id }}' --required
AND channel_id = '{{ channel_id }}' --required
AND region = '{{ region }}' --required
AND channelName = '{{ channelName }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_add_channel_role_to_accessors"
    values={[
        { label: 'batch_add_channel_role_to_accessors', value: 'batch_add_channel_role_to_accessors' },
        { label: 'batch_remove_channel_role_from_accessors', value: 'batch_remove_channel_role_from_accessors' }
    ]}
>
<TabItem value="batch_add_channel_role_to_accessors">

Add role to multiple users or groups in a private re:Post channel.

```sql
EXEC aws.repostspace.channels.batch_add_channel_role_to_accessors 
@space_id='{{ space_id }}' --required, 
@channel_id='{{ channel_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"accessorIds": "{{ accessorIds }}", 
"channelRole": "{{ channelRole }}"
}'
;
```
</TabItem>
<TabItem value="batch_remove_channel_role_from_accessors">

Remove a role from multiple users or groups in a private re:Post channel.

```sql
EXEC aws.repostspace.channels.batch_remove_channel_role_from_accessors 
@space_id='{{ space_id }}' --required, 
@channel_id='{{ channel_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"accessorIds": "{{ accessorIds }}", 
"channelRole": "{{ channelRole }}"
}'
;
```
</TabItem>
</Tabs>
