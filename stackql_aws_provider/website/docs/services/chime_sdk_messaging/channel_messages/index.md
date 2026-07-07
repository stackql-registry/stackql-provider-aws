--- 
title: channel_messages
hide_title: false
hide_table_of_contents: false
keywords:
  - channel_messages
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

Creates, updates, deletes, gets or lists a <code>channel_messages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="channel_messages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_messaging.channel_messages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_channel_message"
    values={[
        { label: 'get_channel_message', value: 'get_channel_message' },
        { label: 'list_channel_messages', value: 'list_channel_messages' }
    ]}
>
<TabItem value="get_channel_message">

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
    <td><CopyableCode code="Content" /></td>
    <td><code>string</code></td>
    <td>The content of the channel message. For Amazon Lex V2 bot responses, this field holds a list of messages originating from the bot. For more information, refer to Processing responses from an AppInstanceBot in the Amazon Chime SDK Messaging Developer Guide. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ContentType" /></td>
    <td><code>string</code></td>
    <td>The content type of the channel message. For Amazon Lex V2 bot responses, the content type is application/amz-chime-lex-msgs for success responses and application/amz-chime-lex-error for failure responses. For more information, refer to Processing responses from an AppInstanceBot in the Amazon Chime SDK Messaging Developer Guide. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the message was created.</td>
</tr>
<tr>
    <td><CopyableCode code="LastEditedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which a message was edited.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which a message was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="MessageAttributes" /></td>
    <td><code>object</code></td>
    <td>The attributes for the channel message. For Amazon Lex V2 bot responses, the attributes are mapped to specific fields from the bot. For more information, refer to Processing responses from an AppInstanceBot in the Amazon Chime SDK Messaging Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="MessageId" /></td>
    <td><code>string</code></td>
    <td>The ID of a message. (pattern: &lt;code&gt;&#91;-_a-zA-Z0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Metadata" /></td>
    <td><code>string</code></td>
    <td>The message metadata. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Persistence" /></td>
    <td><code>string</code></td>
    <td>The persistence setting for a channel message. (PERSISTENT, NON_PERSISTENT)</td>
</tr>
<tr>
    <td><CopyableCode code="Redacted" /></td>
    <td><code>boolean</code></td>
    <td>Hides the content of a message.</td>
</tr>
<tr>
    <td><CopyableCode code="Sender" /></td>
    <td><code>object</code></td>
    <td>The details of a user or bot.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>object</code></td>
    <td>The status of the channel message.</td>
</tr>
<tr>
    <td><CopyableCode code="SubChannelId" /></td>
    <td><code>string</code></td>
    <td>The ID of the SubChannel. (pattern: &lt;code&gt;&#91;-_a-zA-Z0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Target" /></td>
    <td><code>array</code></td>
    <td>The target of a message, a sender, a user, or a bot. Only the target and the sender can view targeted messages. Only users who can see targeted messages can take actions on them. However, administrators can delete targeted messages that they can’t see.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The message type. (STANDARD, CONTROL)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_channel_messages">

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
    <td>The ARN of the channel containing the requested messages. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelMessages" /></td>
    <td><code>array</code></td>
    <td>The information about, and content of, each requested message.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token passed by previous API calls until all requested messages are returned. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SubChannelId" /></td>
    <td><code>string</code></td>
    <td>The ID of the SubChannel in the response. (pattern: &lt;code&gt;&#91;-_a-zA-Z0-9&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_channel_message"><CopyableCode code="get_channel_message" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-message_id"><code>message_id</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-sub-channel-id"><code>sub-channel-id</code></a></td>
    <td>Gets the full details of a channel message. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.</td>
</tr>
<tr>
    <td><a href="#list_channel_messages"><CopyableCode code="list_channel_messages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-sort-order"><code>sort-order</code></a>, <a href="#parameter-not-before"><code>not-before</code></a>, <a href="#parameter-not-after"><code>not-after</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-sub-channel-id"><code>sub-channel-id</code></a></td>
    <td>List all the messages in a channel. Returns a paginated list of ChannelMessages. By default, sorted by creation timestamp in descending order. Redacted messages appear in the results as empty, since they are only redacted, not deleted. Deleted messages do not appear in the results. This action always returns the latest version of an edited message. Also, the x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.</td>
</tr>
<tr>
    <td><a href="#update_channel_message"><CopyableCode code="update_channel_message" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-message_id"><code>message_id</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Content"><code>Content</code></a></td>
    <td></td>
    <td>Updates the content of a message. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.</td>
</tr>
<tr>
    <td><a href="#delete_channel_message"><CopyableCode code="delete_channel_message" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-message_id"><code>message_id</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-sub-channel-id"><code>sub-channel-id</code></a></td>
    <td>Deletes a channel message. Only admins can perform this action. Deletion makes messages inaccessible immediately. A background process deletes any revisions created by UpdateChannelMessage. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.</td>
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
<tr id="parameter-message_id">
    <td><CopyableCode code="message_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the message being deleted.</td>
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
    <td>The maximum number of messages that you want returned.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token passed by previous API calls until all requested messages are returned.</td>
</tr>
<tr id="parameter-not-after">
    <td><CopyableCode code="not-after" /></td>
    <td><code>string (date-time)</code></td>
    <td>The final or ending time stamp for your requested messages.</td>
</tr>
<tr id="parameter-not-before">
    <td><CopyableCode code="not-before" /></td>
    <td><code>string (date-time)</code></td>
    <td>The initial or starting time stamp for your requested messages.</td>
</tr>
<tr id="parameter-sort-order">
    <td><CopyableCode code="sort-order" /></td>
    <td><code>string</code></td>
    <td>The order in which you want messages sorted. Default is Descending, based on time created.</td>
</tr>
<tr id="parameter-sub-channel-id">
    <td><CopyableCode code="sub-channel-id" /></td>
    <td><code>string</code></td>
    <td>The ID of the SubChannel in the request. Only required when deleting messages in a SubChannel that the user belongs to.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_channel_message"
    values={[
        { label: 'get_channel_message', value: 'get_channel_message' },
        { label: 'list_channel_messages', value: 'list_channel_messages' }
    ]}
>
<TabItem value="get_channel_message">

Gets the full details of a channel message. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.

```sql
SELECT
ChannelArn,
Content,
ContentType,
CreatedTimestamp,
LastEditedTimestamp,
LastUpdatedTimestamp,
MessageAttributes,
MessageId,
Metadata,
Persistence,
Redacted,
Sender,
Status,
SubChannelId,
Target,
Type
FROM aws.chime_sdk_messaging.channel_messages
WHERE channel_arn = '{{ channel_arn }}' -- required
AND message_id = '{{ message_id }}' -- required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}' -- required
AND region = '{{ region }}' -- required
AND `sub-channel-id` = '{{ sub-channel-id }}'
;
```
</TabItem>
<TabItem value="list_channel_messages">

List all the messages in a channel. Returns a paginated list of ChannelMessages. By default, sorted by creation timestamp in descending order. Redacted messages appear in the results as empty, since they are only redacted, not deleted. Deleted messages do not appear in the results. This action always returns the latest version of an edited message. Also, the x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.

```sql
SELECT
ChannelArn,
ChannelMessages,
NextToken,
SubChannelId
FROM aws.chime_sdk_messaging.channel_messages
WHERE channel_arn = '{{ channel_arn }}' -- required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}' -- required
AND region = '{{ region }}' -- required
AND `sort-order` = '{{ sort-order }}'
AND `not-before` = '{{ not-before }}'
AND `not-after` = '{{ not-after }}'
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
AND `sub-channel-id` = '{{ sub-channel-id }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_channel_message"
    values={[
        { label: 'update_channel_message', value: 'update_channel_message' }
    ]}
>
<TabItem value="update_channel_message">

Updates the content of a message. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.

```sql
UPDATE aws.chime_sdk_messaging.channel_messages
SET 
Content = '{{ Content }}',
Metadata = '{{ Metadata }}',
SubChannelId = '{{ SubChannelId }}',
ContentType = '{{ ContentType }}'
WHERE 
channel_arn = '{{ channel_arn }}' --required
AND message_id = '{{ message_id }}' --required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}' --required
AND region = '{{ region }}' --required
AND Content = '{{ Content }}' --required
RETURNING
ChannelArn,
MessageId,
Status,
SubChannelId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_channel_message"
    values={[
        { label: 'delete_channel_message', value: 'delete_channel_message' }
    ]}
>
<TabItem value="delete_channel_message">

Deletes a channel message. Only admins can perform this action. Deletion makes messages inaccessible immediately. A background process deletes any revisions created by UpdateChannelMessage. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.

```sql
DELETE FROM aws.chime_sdk_messaging.channel_messages
WHERE channel_arn = '{{ channel_arn }}' --required
AND message_id = '{{ message_id }}' --required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}' --required
AND region = '{{ region }}' --required
AND `sub-channel-id` = '{{ sub-channel-id }}'
;
```
</TabItem>
</Tabs>
