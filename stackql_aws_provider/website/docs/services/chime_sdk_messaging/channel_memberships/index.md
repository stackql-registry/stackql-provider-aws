--- 
title: channel_memberships
hide_title: false
hide_table_of_contents: false
keywords:
  - channel_memberships
  - chime_sdk_messaging
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

Creates, updates, deletes, gets or lists a <code>channel_memberships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="channel_memberships" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_messaging.channel_memberships" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_channel_membership"
    values={[
        { label: 'describe_channel_membership', value: 'describe_channel_membership' },
        { label: 'list_channel_memberships', value: 'list_channel_memberships' }
    ]}
>
<TabItem value="describe_channel_membership">

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
    <td><CopyableCode code="channel_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the member's channel. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the channel membership was created.</td>
</tr>
<tr>
    <td><CopyableCode code="invited_by" /></td>
    <td><code>object</code></td>
    <td>The details of a user or bot.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which a channel membership was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="member" /></td>
    <td><code>object</code></td>
    <td>The details of a user or bot.</td>
</tr>
<tr>
    <td><CopyableCode code="sub_channel_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the SubChannel that a user belongs to. (pattern: &lt;code&gt;&#91;-_a-zA-Z0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The membership type set for the channel member. (DEFAULT, HIDDEN)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_channel_memberships">

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
    <td><CopyableCode code="channel_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the channel. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="channel_memberships" /></td>
    <td><code>array</code></td>
    <td>The information for the requested channel memberships.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token passed by previous API calls until all requested channel memberships are returned. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_channel_membership"><CopyableCode code="describe_channel_membership" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-member_arn"><code>member_arn</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-sub-channel-id"><code>sub-channel-id</code></a></td>
    <td>Returns the full details of a user's channel membership. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.</td>
</tr>
<tr>
    <td><a href="#list_channel_memberships"><CopyableCode code="list_channel_memberships" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-sub-channel-id"><code>sub-channel-id</code></a></td>
    <td>Lists all channel memberships in a channel. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header. If you want to list the channels to which a specific app instance user belongs, see the ListChannelMembershipsForAppInstanceUser API.</td>
</tr>
<tr>
    <td><a href="#create_channel_membership"><CopyableCode code="create_channel_membership" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MemberArn"><code>MemberArn</code></a>, <a href="#parameter-Type"><code>Type</code></a></td>
    <td></td>
    <td>Adds a member to a channel. The InvitedBy field in ChannelMembership is derived from the request header. A channel member can: List messages Send messages Receive messages Edit their own messages Leave the channel Privacy settings impact this action as follows: Public Channels: You do not need to be a member to list messages, but you must be a member to send messages. Private Channels: You must be a member to list or send messages. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUserArn or AppInstanceBot that makes the API call as the value in the header.</td>
</tr>
<tr>
    <td><a href="#delete_channel_membership"><CopyableCode code="delete_channel_membership" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-member_arn"><code>member_arn</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-sub-channel-id"><code>sub-channel-id</code></a></td>
    <td>Removes a member from a channel. The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.</td>
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
<tr id="parameter-channel_arn">
    <td><CopyableCode code="channel_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the channel from which you want to remove the user.</td>
</tr>
<tr id="parameter-member_arn">
    <td><CopyableCode code="member_arn" /></td>
    <td><code>string</code></td>
    <td>The AppInstanceUserArn of the member that you're removing from the channel.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amz-chime-bearer">
    <td><CopyableCode code="x-amz-chime-bearer" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AppInstanceUser or AppInstanceBot that makes the API call.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of channel memberships that you want returned.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token passed by previous API calls until all requested channel memberships are returned.</td>
</tr>
<tr id="parameter-sub-channel-id">
    <td><CopyableCode code="sub-channel-id" /></td>
    <td><code>string</code></td>
    <td>The ID of the SubChannel in the request. Only for use by moderators.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The membership type of a user, DEFAULT or HIDDEN. Default members are returned as part of ListChannelMemberships if no type is specified. Hidden members are only returned if the type filter in ListChannelMemberships equals HIDDEN.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_channel_membership"
    values={[
        { label: 'describe_channel_membership', value: 'describe_channel_membership' },
        { label: 'list_channel_memberships', value: 'list_channel_memberships' }
    ]}
>
<TabItem value="describe_channel_membership">

Returns the full details of a user's channel membership. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.

```sql
SELECT
channel_arn,
created_timestamp,
invited_by,
last_updated_timestamp,
member,
sub_channel_id,
type
FROM aws.chime_sdk_messaging.channel_memberships
WHERE channel_arn = '{{ channel_arn }}' -- required
AND member_arn = '{{ member_arn }}' -- required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}' -- required
AND region = '{{ region }}' -- required
AND `sub-channel-id` = '{{ sub-channel-id }}'
;
```
</TabItem>
<TabItem value="list_channel_memberships">

Lists all channel memberships in a channel. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header. If you want to list the channels to which a specific app instance user belongs, see the ListChannelMembershipsForAppInstanceUser API.

```sql
SELECT
channel_arn,
channel_memberships,
next_token
FROM aws.chime_sdk_messaging.channel_memberships
WHERE channel_arn = '{{ channel_arn }}' -- required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}' -- required
AND region = '{{ region }}' -- required
AND type = '{{ type }}'
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
AND `sub-channel-id` = '{{ sub-channel-id }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_channel_membership"
    values={[
        { label: 'create_channel_membership', value: 'create_channel_membership' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_channel_membership">

Adds a member to a channel. The InvitedBy field in ChannelMembership is derived from the request header. A channel member can: List messages Send messages Receive messages Edit their own messages Leave the channel Privacy settings impact this action as follows: Public Channels: You do not need to be a member to list messages, but you must be a member to send messages. Private Channels: You must be a member to list or send messages. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUserArn or AppInstanceBot that makes the API call as the value in the header.

```sql
INSERT INTO aws.chime_sdk_messaging.channel_memberships (
MemberArn,
Type,
SubChannelId,
channel_arn,
`x-amz-chime-bearer`,
region
)
SELECT 
'{{ MemberArn }}' /* required */,
'{{ Type }}' /* required */,
'{{ SubChannelId }}',
'{{ channel_arn }}',
'{{ x-amz-chime-bearer }}',
'{{ region }}'
RETURNING
channel_arn,
member,
sub_channel_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: channel_memberships
  props:
    - name: channel_arn
      value: "{{ channel_arn }}"
      description: Required parameter for the channel_memberships resource.
    - name: x-amz-chime-bearer
      value: "{{ x-amz-chime-bearer }}"
      description: Required parameter for the channel_memberships resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the channel_memberships resource.
    - name: MemberArn
      value: "{{ MemberArn }}"
    - name: Type
      value: "{{ Type }}"
      valid_values: ['DEFAULT', 'HIDDEN']
    - name: SubChannelId
      value: "{{ SubChannelId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_channel_membership"
    values={[
        { label: 'delete_channel_membership', value: 'delete_channel_membership' }
    ]}
>
<TabItem value="delete_channel_membership">

Removes a member from a channel. The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.

```sql
DELETE FROM aws.chime_sdk_messaging.channel_memberships
WHERE channel_arn = '{{ channel_arn }}' --required
AND member_arn = '{{ member_arn }}' --required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}' --required
AND region = '{{ region }}' --required
AND `sub-channel-id` = '{{ sub-channel-id }}'
;
```
</TabItem>
</Tabs>
