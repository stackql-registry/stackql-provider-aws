--- 
title: channels
hide_title: false
hide_table_of_contents: false
keywords:
  - channels
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

Creates, updates, deletes, gets or lists a <code>channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="channels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_messaging.channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_channels"
    values={[
        { label: 'list_channels', value: 'list_channels' },
        { label: 'describe_channel', value: 'describe_channel' },
        { label: 'search_channels', value: 'search_channels' }
    ]}
>
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
    <td><CopyableCode code="Channels" /></td>
    <td><code>array</code></td>
    <td>The information about each channel.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from previous API requests until the number of channels is reached. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_channel">

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
    <td>The ARN of a channel. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelFlowArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the channel flow. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>object</code></td>
    <td>The details of a user or bot.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the AppInstanceUser created the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="ElasticChannelConfiguration" /></td>
    <td><code>object</code></td>
    <td>The attributes required to configure and create an elastic channel. An elastic channel can support a maximum of 1-million members.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpirationSettings" /></td>
    <td><code>object</code></td>
    <td>Settings that control the interval after which a channel is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="LastMessageTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which a member sent the last message in the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which a channel was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Metadata" /></td>
    <td><code>string</code></td>
    <td>The channel's metadata. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Mode" /></td>
    <td><code>string</code></td>
    <td>The mode of the channel. (UNRESTRICTED, RESTRICTED)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of a channel. (pattern: &lt;code&gt;&#91;\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Privacy" /></td>
    <td><code>string</code></td>
    <td>The channel's privacy setting. (PUBLIC, PRIVATE)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_channels">

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
    <td><CopyableCode code="Channels" /></td>
    <td><code>array</code></td>
    <td>A list of the channels in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from previous API responses until the number of channels is reached. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#list_channels"><CopyableCode code="list_channels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app-instance-arn"><code>app-instance-arn</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-privacy"><code>privacy</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Lists all Channels created under a single Chime App as a paginated list. You can specify filters to narrow results. Functionality & restrictions Use privacy = PUBLIC to retrieve all public channels in the account. Only an AppInstanceAdmin can set privacy = PRIVATE to list the private channels in an account. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.</td>
</tr>
<tr>
    <td><a href="#describe_channel"><CopyableCode code="describe_channel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the full details of a channel in an Amazon Chime AppInstance. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.</td>
</tr>
<tr>
    <td><a href="#search_channels"><CopyableCode code="search_channels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Allows the ChimeBearer to search channels by channel members. Users or bots can search across the channels that they belong to. Users in the AppInstanceAdmin role can search across all channels. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header. This operation isn't supported for AppInstanceUsers with a large number of memberships.</td>
</tr>
<tr>
    <td><a href="#create_channel"><CopyableCode code="create_channel" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AppInstanceArn"><code>AppInstanceArn</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td></td>
    <td>Creates a channel to which you can add users and send messages. Restriction: You can't change a channel's privacy. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.</td>
</tr>
<tr>
    <td><a href="#update_channel"><CopyableCode code="update_channel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update a channel's attributes. Restriction: You can't change a channel's privacy. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.</td>
</tr>
<tr>
    <td><a href="#put_channel_expiration_settings"><CopyableCode code="put_channel_expiration_settings" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a></td>
    <td>Sets the number of days before the channel is automatically deleted. A background process deletes expired channels within 6 hours of expiration. Actual deletion times may vary. Expired channels that have not yet been deleted appear as active, and you can update their expiration settings. The system honors the new settings. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.</td>
</tr>
<tr>
    <td><a href="#delete_channel"><CopyableCode code="delete_channel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Immediately makes a channel and its memberships inaccessible and marks them for deletion. This is an irreversible process. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUserArn or AppInstanceBot that makes the API call as the value in the header.</td>
</tr>
<tr>
    <td><a href="#batch_create_channel_membership"><CopyableCode code="batch_create_channel_membership" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MemberArns"><code>MemberArns</code></a></td>
    <td></td>
    <td>Adds a specified number of users and bots to a channel.</td>
</tr>
<tr>
    <td><a href="#send_channel_message"><CopyableCode code="send_channel_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Content"><code>Content</code></a>, <a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-Persistence"><code>Persistence</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td></td>
    <td>Sends a message to a particular channel that the member is a part of. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header. Also, STANDARD messages can be up to 4KB in size and contain metadata. Metadata is arbitrary, and you can use it in a variety of ways, such as containing a link to an attachment. CONTROL messages are limited to 30 bytes and do not contain metadata.</td>
</tr>
<tr>
    <td><a href="#redact_channel_message"><CopyableCode code="redact_channel_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-message_id"><code>message_id</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Redacts message content and metadata. The message exists in the back end, but the action returns null content, and the state shows as redacted. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.</td>
</tr>
<tr>
    <td><a href="#update_channel_read_marker"><CopyableCode code="update_channel_read_marker" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The details of the time when a user last read messages in a channel. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.</td>
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
<tr id="parameter-app-instance-arn">
    <td><CopyableCode code="app-instance-arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AppInstance.</td>
</tr>
<tr id="parameter-channel_arn">
    <td><CopyableCode code="channel_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the channel.</td>
</tr>
<tr id="parameter-message_id">
    <td><CopyableCode code="message_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the message being redacted.</td>
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
    <td>The maximum number of channels that you want returned.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token returned from previous API requests until the number of channels is reached.</td>
</tr>
<tr id="parameter-privacy">
    <td><CopyableCode code="privacy" /></td>
    <td><code>string</code></td>
    <td>The privacy setting. PUBLIC retrieves all the public channels. PRIVATE retrieves private channels. Only an AppInstanceAdmin can retrieve private channels.</td>
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
    defaultValue="list_channels"
    values={[
        { label: 'list_channels', value: 'list_channels' },
        { label: 'describe_channel', value: 'describe_channel' },
        { label: 'search_channels', value: 'search_channels' }
    ]}
>
<TabItem value="list_channels">

Lists all Channels created under a single Chime App as a paginated list. You can specify filters to narrow results. Functionality & restrictions Use privacy = PUBLIC to retrieve all public channels in the account. Only an AppInstanceAdmin can set privacy = PRIVATE to list the private channels in an account. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.

```sql
SELECT
Channels,
NextToken
FROM aws.chime_sdk_messaging.channels
WHERE `app-instance-arn` = '{{ app-instance-arn }}' -- required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}' -- required
AND region = '{{ region }}' -- required
AND privacy = '{{ privacy }}'
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
<TabItem value="describe_channel">

Returns the full details of a channel in an Amazon Chime AppInstance. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.

```sql
SELECT
ChannelArn,
ChannelFlowArn,
CreatedBy,
CreatedTimestamp,
ElasticChannelConfiguration,
ExpirationSettings,
LastMessageTimestamp,
LastUpdatedTimestamp,
Metadata,
Mode,
Name,
Privacy
FROM aws.chime_sdk_messaging.channels
WHERE channel_arn = '{{ channel_arn }}' -- required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_channels">

Allows the ChimeBearer to search channels by channel members. Users or bots can search across the channels that they belong to. Users in the AppInstanceAdmin role can search across all channels. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header. This operation isn't supported for AppInstanceUsers with a large number of memberships.

```sql
SELECT
Channels,
NextToken
FROM aws.chime_sdk_messaging.channels
WHERE region = '{{ region }}' -- required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}'
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
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

Creates a channel to which you can add users and send messages. Restriction: You can't change a channel's privacy. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.

```sql
INSERT INTO aws.chime_sdk_messaging.channels (
AppInstanceArn,
Name,
Mode,
Privacy,
Metadata,
ClientRequestToken,
Tags,
ChannelId,
MemberArns,
ModeratorArns,
ElasticChannelConfiguration,
ExpirationSettings,
`x-amz-chime-bearer`,
region
)
SELECT 
'{{ AppInstanceArn }}' /* required */,
'{{ Name }}' /* required */,
'{{ Mode }}',
'{{ Privacy }}',
'{{ Metadata }}',
'{{ ClientRequestToken }}' /* required */,
'{{ Tags }}',
'{{ ChannelId }}',
'{{ MemberArns }}',
'{{ ModeratorArns }}',
'{{ ElasticChannelConfiguration }}',
'{{ ExpirationSettings }}',
'{{ x-amz-chime-bearer }}',
'{{ region }}'
RETURNING
ChannelArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: channels
  props:
    - name: x-amz-chime-bearer
      value: "{{ x-amz-chime-bearer }}"
      description: Required parameter for the channels resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the channels resource.
    - name: AppInstanceArn
      value: "{{ AppInstanceArn }}"
    - name: Name
      value: "{{ Name }}"
    - name: Mode
      value: "{{ Mode }}"
      valid_values: ['UNRESTRICTED', 'RESTRICTED']
    - name: Privacy
      value: "{{ Privacy }}"
      valid_values: ['PUBLIC', 'PRIVATE']
    - name: Metadata
      value: "{{ Metadata }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ChannelId
      value: "{{ ChannelId }}"
    - name: MemberArns
      value:
        - "{{ MemberArns }}"
    - name: ModeratorArns
      value:
        - "{{ ModeratorArns }}"
    - name: ElasticChannelConfiguration
      description: |
        The attributes required to configure and create an elastic channel. An elastic channel can support a maximum of 1-million members.
      value:
        MaximumSubChannels: {{ MaximumSubChannels }}
        TargetMembershipsPerSubChannel: {{ TargetMembershipsPerSubChannel }}
        MinimumMembershipPercentage: {{ MinimumMembershipPercentage }}
    - name: ExpirationSettings
      description: |
        Settings that control the interval after which a channel is deleted.
      value:
        ExpirationDays: {{ ExpirationDays }}
        ExpirationCriterion: "{{ ExpirationCriterion }}"
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

Update a channel's attributes. Restriction: You can't change a channel's privacy. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.

```sql
UPDATE aws.chime_sdk_messaging.channels
SET 
Name = '{{ Name }}',
Mode = '{{ Mode }}',
Metadata = '{{ Metadata }}'
WHERE 
channel_arn = '{{ channel_arn }}' --required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}' --required
AND region = '{{ region }}' --required
RETURNING
ChannelArn;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_channel_expiration_settings"
    values={[
        { label: 'put_channel_expiration_settings', value: 'put_channel_expiration_settings' }
    ]}
>
<TabItem value="put_channel_expiration_settings">

Sets the number of days before the channel is automatically deleted. A background process deletes expired channels within 6 hours of expiration. Actual deletion times may vary. Expired channels that have not yet been deleted appear as active, and you can update their expiration settings. The system honors the new settings. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.

```sql
REPLACE aws.chime_sdk_messaging.channels
SET 
ExpirationSettings = '{{ ExpirationSettings }}'
WHERE 
channel_arn = '{{ channel_arn }}' --required
AND region = '{{ region }}' --required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer}}'
RETURNING
ChannelArn,
ExpirationSettings;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_channel"
    values={[
        { label: 'delete_channel', value: 'delete_channel' }
    ]}
>
<TabItem value="delete_channel">

Immediately makes a channel and its memberships inaccessible and marks them for deletion. This is an irreversible process. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUserArn or AppInstanceBot that makes the API call as the value in the header.

```sql
DELETE FROM aws.chime_sdk_messaging.channels
WHERE channel_arn = '{{ channel_arn }}' --required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_create_channel_membership"
    values={[
        { label: 'batch_create_channel_membership', value: 'batch_create_channel_membership' },
        { label: 'send_channel_message', value: 'send_channel_message' },
        { label: 'redact_channel_message', value: 'redact_channel_message' },
        { label: 'update_channel_read_marker', value: 'update_channel_read_marker' }
    ]}
>
<TabItem value="batch_create_channel_membership">

Adds a specified number of users and bots to a channel.

```sql
EXEC aws.chime_sdk_messaging.channels.batch_create_channel_membership 
@channel_arn='{{ channel_arn }}' --required, 
@x-amz-chime-bearer='{{ x-amz-chime-bearer }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Type": "{{ Type }}", 
"MemberArns": "{{ MemberArns }}", 
"SubChannelId": "{{ SubChannelId }}"
}'
;
```
</TabItem>
<TabItem value="send_channel_message">

Sends a message to a particular channel that the member is a part of. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header. Also, STANDARD messages can be up to 4KB in size and contain metadata. Metadata is arbitrary, and you can use it in a variety of ways, such as containing a link to an attachment. CONTROL messages are limited to 30 bytes and do not contain metadata.

```sql
EXEC aws.chime_sdk_messaging.channels.send_channel_message 
@channel_arn='{{ channel_arn }}' --required, 
@x-amz-chime-bearer='{{ x-amz-chime-bearer }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Content": "{{ Content }}", 
"Type": "{{ Type }}", 
"Persistence": "{{ Persistence }}", 
"Metadata": "{{ Metadata }}", 
"ClientRequestToken": "{{ ClientRequestToken }}", 
"PushNotification": "{{ PushNotification }}", 
"MessageAttributes": "{{ MessageAttributes }}", 
"SubChannelId": "{{ SubChannelId }}", 
"ContentType": "{{ ContentType }}", 
"Target": "{{ Target }}"
}'
;
```
</TabItem>
<TabItem value="redact_channel_message">

Redacts message content and metadata. The message exists in the back end, but the action returns null content, and the state shows as redacted. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.

```sql
EXEC aws.chime_sdk_messaging.channels.redact_channel_message 
@channel_arn='{{ channel_arn }}' --required, 
@message_id='{{ message_id }}' --required, 
@x-amz-chime-bearer='{{ x-amz-chime-bearer }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"SubChannelId": "{{ SubChannelId }}"
}'
;
```
</TabItem>
<TabItem value="update_channel_read_marker">

The details of the time when a user last read messages in a channel. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.

```sql
EXEC aws.chime_sdk_messaging.channels.update_channel_read_marker 
@channel_arn='{{ channel_arn }}' --required, 
@x-amz-chime-bearer='{{ x-amz-chime-bearer }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
