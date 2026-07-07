--- 
title: channel_membership_preferences
hide_title: false
hide_table_of_contents: false
keywords:
  - channel_membership_preferences
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

Creates, updates, deletes, gets or lists a <code>channel_membership_preferences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="channel_membership_preferences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_messaging.channel_membership_preferences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_channel_membership_preferences"
    values={[
        { label: 'get_channel_membership_preferences', value: 'get_channel_membership_preferences' }
    ]}
>
<TabItem value="get_channel_membership_preferences">

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
    <td><CopyableCode code="ChannelArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the channel. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Member" /></td>
    <td><code>object</code></td>
    <td>The details of a user or bot.</td>
</tr>
<tr>
    <td><CopyableCode code="Preferences" /></td>
    <td><code>object</code></td>
    <td>The channel membership preferences for an AppInstanceUser .</td>
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
    <td><a href="#get_channel_membership_preferences"><CopyableCode code="get_channel_membership_preferences" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-member_arn"><code>member_arn</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the membership preferences of an AppInstanceUser or AppInstanceBot for the specified channel. A user or a bot must be a member of the channel and own the membership in order to retrieve membership preferences. Users or bots in the AppInstanceAdmin and channel moderator roles can't retrieve preferences for other users or bots. Banned users or bots can't retrieve membership preferences for the channel from which they are banned. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.</td>
</tr>
<tr>
    <td><a href="#put_channel_membership_preferences"><CopyableCode code="put_channel_membership_preferences" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-member_arn"><code>member_arn</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sets the membership preferences of an AppInstanceUser or AppInstanceBot for the specified channel. The user or bot must be a member of the channel. Only the user or bot who owns the membership can set preferences. Users or bots in the AppInstanceAdmin and channel moderator roles can't set preferences for other users. Banned users or bots can't set membership preferences for the channel from which they are banned. The x-amz-chime-bearer request header is mandatory. Use the ARN of an AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.</td>
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
    <td>The ARN of the channel.</td>
</tr>
<tr id="parameter-member_arn">
    <td><CopyableCode code="member_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the member setting the preferences.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_channel_membership_preferences"
    values={[
        { label: 'get_channel_membership_preferences', value: 'get_channel_membership_preferences' }
    ]}
>
<TabItem value="get_channel_membership_preferences">

Gets the membership preferences of an AppInstanceUser or AppInstanceBot for the specified channel. A user or a bot must be a member of the channel and own the membership in order to retrieve membership preferences. Users or bots in the AppInstanceAdmin and channel moderator roles can't retrieve preferences for other users or bots. Banned users or bots can't retrieve membership preferences for the channel from which they are banned. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.

```sql
SELECT
ChannelArn,
Member,
Preferences
FROM aws.chime_sdk_messaging.channel_membership_preferences
WHERE channel_arn = '{{ channel_arn }}' -- required
AND member_arn = '{{ member_arn }}' -- required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_channel_membership_preferences"
    values={[
        { label: 'put_channel_membership_preferences', value: 'put_channel_membership_preferences' }
    ]}
>
<TabItem value="put_channel_membership_preferences">

Sets the membership preferences of an AppInstanceUser or AppInstanceBot for the specified channel. The user or bot must be a member of the channel. Only the user or bot who owns the membership can set preferences. Users or bots in the AppInstanceAdmin and channel moderator roles can't set preferences for other users. Banned users or bots can't set membership preferences for the channel from which they are banned. The x-amz-chime-bearer request header is mandatory. Use the ARN of an AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.

```sql
REPLACE aws.chime_sdk_messaging.channel_membership_preferences
SET 
Preferences = '{{ Preferences }}'
WHERE 
channel_arn = '{{ channel_arn }}' --required
AND member_arn = '{{ member_arn }}' --required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}' --required
AND region = '{{ region }}' --required
RETURNING
ChannelArn,
Member,
Preferences;
```
</TabItem>
</Tabs>
