--- 
title: channel_moderators
hide_title: false
hide_table_of_contents: false
keywords:
  - channel_moderators
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

Creates, updates, deletes, gets or lists a <code>channel_moderators</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="channel_moderators" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_messaging.channel_moderators" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_channel_moderator"
    values={[
        { label: 'describe_channel_moderator', value: 'describe_channel_moderator' },
        { label: 'list_channel_moderators', value: 'list_channel_moderators' }
    ]}
>
<TabItem value="describe_channel_moderator">

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
    <td>The ARN of the moderator's channel. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>The details of a user or bot.</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the moderator was created.</td>
</tr>
<tr>
    <td><CopyableCode code="moderator" /></td>
    <td><code>object</code></td>
    <td>The details of a user or bot.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_channel_moderators">

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
    <td><CopyableCode code="channel_moderators" /></td>
    <td><code>array</code></td>
    <td>The information about and names of each moderator.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token passed by previous API calls until all requested moderators are returned. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_channel_moderator"><CopyableCode code="describe_channel_moderator" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-channel_moderator_arn"><code>channel_moderator_arn</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the full details of a single ChannelModerator. The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.</td>
</tr>
<tr>
    <td><a href="#list_channel_moderators"><CopyableCode code="list_channel_moderators" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Lists all the moderators for a channel. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.</td>
</tr>
<tr>
    <td><a href="#create_channel_moderator"><CopyableCode code="create_channel_moderator" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ChannelModeratorArn"><code>ChannelModeratorArn</code></a></td>
    <td></td>
    <td>Creates a new ChannelModerator. A channel moderator can: Add and remove other members of the channel. Add and remove other moderators of the channel. Add and remove user bans for the channel. Redact messages in the channel. List messages in the channel. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBotof the user that makes the API call as the value in the header.</td>
</tr>
<tr>
    <td><a href="#delete_channel_moderator"><CopyableCode code="delete_channel_moderator" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-channel_moderator_arn"><code>channel_moderator_arn</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a channel moderator. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.</td>
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
<tr id="parameter-channel_moderator_arn">
    <td><CopyableCode code="channel_moderator_arn" /></td>
    <td><code>string</code></td>
    <td>The AppInstanceUserArn of the moderator being deleted.</td>
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
    <td>The maximum number of moderators that you want returned.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token passed by previous API calls until all requested moderators are returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_channel_moderator"
    values={[
        { label: 'describe_channel_moderator', value: 'describe_channel_moderator' },
        { label: 'list_channel_moderators', value: 'list_channel_moderators' }
    ]}
>
<TabItem value="describe_channel_moderator">

Returns the full details of a single ChannelModerator. The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.

```sql
SELECT
channel_arn,
created_by,
created_timestamp,
moderator
FROM aws.chime_sdk_messaging.channel_moderators
WHERE channel_arn = '{{ channel_arn }}' -- required
AND channel_moderator_arn = '{{ channel_moderator_arn }}' -- required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_channel_moderators">

Lists all the moderators for a channel. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.

```sql
SELECT
channel_arn,
channel_moderators,
next_token
FROM aws.chime_sdk_messaging.channel_moderators
WHERE channel_arn = '{{ channel_arn }}' -- required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_channel_moderator"
    values={[
        { label: 'create_channel_moderator', value: 'create_channel_moderator' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_channel_moderator">

Creates a new ChannelModerator. A channel moderator can: Add and remove other members of the channel. Add and remove other moderators of the channel. Add and remove user bans for the channel. Redact messages in the channel. List messages in the channel. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBotof the user that makes the API call as the value in the header.

```sql
INSERT INTO aws.chime_sdk_messaging.channel_moderators (
ChannelModeratorArn,
channel_arn,
`x-amz-chime-bearer`,
region
)
SELECT 
'{{ ChannelModeratorArn }}' /* required */,
'{{ channel_arn }}',
'{{ x-amz-chime-bearer }}',
'{{ region }}'
RETURNING
channel_arn,
channel_moderator
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: channel_moderators
  props:
    - name: channel_arn
      value: "{{ channel_arn }}"
      description: Required parameter for the channel_moderators resource.
    - name: x-amz-chime-bearer
      value: "{{ x-amz-chime-bearer }}"
      description: Required parameter for the channel_moderators resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the channel_moderators resource.
    - name: ChannelModeratorArn
      value: "{{ ChannelModeratorArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_channel_moderator"
    values={[
        { label: 'delete_channel_moderator', value: 'delete_channel_moderator' }
    ]}
>
<TabItem value="delete_channel_moderator">

Deletes a channel moderator. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.

```sql
DELETE FROM aws.chime_sdk_messaging.channel_moderators
WHERE channel_arn = '{{ channel_arn }}' --required
AND channel_moderator_arn = '{{ channel_moderator_arn }}' --required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
