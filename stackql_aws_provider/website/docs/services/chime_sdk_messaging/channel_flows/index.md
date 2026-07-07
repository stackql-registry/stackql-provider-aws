--- 
title: channel_flows
hide_title: false
hide_table_of_contents: false
keywords:
  - channel_flows
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

Creates, updates, deletes, gets or lists a <code>channel_flows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="channel_flows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_messaging.channel_flows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_channel_flows"
    values={[
        { label: 'list_channel_flows', value: 'list_channel_flows' },
        { label: 'describe_channel_flow', value: 'describe_channel_flow' }
    ]}
>
<TabItem value="list_channel_flows">

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
    <td><CopyableCode code="ChannelFlows" /></td>
    <td><code>array</code></td>
    <td>The information about each channel flow.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token passed by previous API calls until all requested channels are returned. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_channel_flow">

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
    <td><CopyableCode code="ChannelFlowArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the channel flow. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the channel flow was created.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which a channel flow was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the channel flow. (pattern: &lt;code&gt;&#91;\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Processors" /></td>
    <td><code>array</code></td>
    <td>Information about the processor Lambda functions.</td>
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
    <td><a href="#list_channel_flows"><CopyableCode code="list_channel_flows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app-instance-arn"><code>app-instance-arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Returns a paginated lists of all the channel flows created under a single Chime. This is a developer API.</td>
</tr>
<tr>
    <td><a href="#describe_channel_flow"><CopyableCode code="describe_channel_flow" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_flow_arn"><code>channel_flow_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the full details of a channel flow in an Amazon Chime AppInstance. This is a developer API.</td>
</tr>
<tr>
    <td><a href="#create_channel_flow"><CopyableCode code="create_channel_flow" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AppInstanceArn"><code>AppInstanceArn</code></a>, <a href="#parameter-Processors"><code>Processors</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td></td>
    <td>Creates a channel flow, a container for processors. Processors are AWS Lambda functions that perform actions on chat messages, such as stripping out profanity. You can associate channel flows with channels, and the processors in the channel flow then take action on all messages sent to that channel. This is a developer API. Channel flows process the following items: New and updated messages Persistent and non-persistent messages The Standard message type Channel flows don't process Control or System messages. For more information about the message types provided by Chime SDK messaging, refer to Message types in the Amazon Chime developer guide.</td>
</tr>
<tr>
    <td><a href="#associate_channel_flow"><CopyableCode code="associate_channel_flow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ChannelFlowArn"><code>ChannelFlowArn</code></a></td>
    <td></td>
    <td>Associates a channel flow with a channel. Once associated, all messages to that channel go through channel flow processors. To stop processing, use the DisassociateChannelFlow API. Only administrators or channel moderators can associate a channel flow. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.</td>
</tr>
<tr>
    <td><a href="#update_channel_flow"><CopyableCode code="update_channel_flow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-channel_flow_arn"><code>channel_flow_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Processors"><code>Processors</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Updates channel flow attributes. This is a developer API.</td>
</tr>
<tr>
    <td><a href="#disassociate_channel_flow"><CopyableCode code="disassociate_channel_flow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-channel_flow_arn"><code>channel_flow_arn</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a channel flow from all its channels. Once disassociated, all messages to that channel stop going through the channel flow processor. Only administrators or channel moderators can disassociate a channel flow. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.</td>
</tr>
<tr>
    <td><a href="#delete_channel_flow"><CopyableCode code="delete_channel_flow" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-channel_flow_arn"><code>channel_flow_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a channel flow, an irreversible process. This is a developer API. This API works only when the channel flow is not associated with any channel. To get a list of all channels that a channel flow is associated with, use the ListChannelsAssociatedWithChannelFlow API. Use the DisassociateChannelFlow API to disassociate a channel flow from all channels.</td>
</tr>
<tr>
    <td><a href="#channel_flow_callback"><CopyableCode code="channel_flow_callback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CallbackId"><code>CallbackId</code></a>, <a href="#parameter-ChannelMessage"><code>ChannelMessage</code></a></td>
    <td></td>
    <td>Calls back Amazon Chime SDK messaging with a processing response message. This should be invoked from the processor Lambda. This is a developer API. You can return one of the following processing responses: Update message content or metadata Deny a message Make no changes to the message</td>
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
    <td>The ARN of the app instance.</td>
</tr>
<tr id="parameter-channel_arn">
    <td><CopyableCode code="channel_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the channel.</td>
</tr>
<tr id="parameter-channel_flow_arn">
    <td><CopyableCode code="channel_flow_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the channel flow.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amz-chime-bearer">
    <td><CopyableCode code="x-amz-chime-bearer" /></td>
    <td><code>string</code></td>
    <td>The AppInstanceUserArn of the user making the API call.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of channel flows that you want to return.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token passed by previous API calls until all requested channel flows are returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_channel_flows"
    values={[
        { label: 'list_channel_flows', value: 'list_channel_flows' },
        { label: 'describe_channel_flow', value: 'describe_channel_flow' }
    ]}
>
<TabItem value="list_channel_flows">

Returns a paginated lists of all the channel flows created under a single Chime. This is a developer API.

```sql
SELECT
ChannelFlows,
NextToken
FROM aws.chime_sdk_messaging.channel_flows
WHERE `app-instance-arn` = '{{ app-instance-arn }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
<TabItem value="describe_channel_flow">

Returns the full details of a channel flow in an Amazon Chime AppInstance. This is a developer API.

```sql
SELECT
ChannelFlowArn,
CreatedTimestamp,
LastUpdatedTimestamp,
Name,
Processors
FROM aws.chime_sdk_messaging.channel_flows
WHERE channel_flow_arn = '{{ channel_flow_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_channel_flow"
    values={[
        { label: 'create_channel_flow', value: 'create_channel_flow' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_channel_flow">

Creates a channel flow, a container for processors. Processors are AWS Lambda functions that perform actions on chat messages, such as stripping out profanity. You can associate channel flows with channels, and the processors in the channel flow then take action on all messages sent to that channel. This is a developer API. Channel flows process the following items: New and updated messages Persistent and non-persistent messages The Standard message type Channel flows don't process Control or System messages. For more information about the message types provided by Chime SDK messaging, refer to Message types in the Amazon Chime developer guide.

```sql
INSERT INTO aws.chime_sdk_messaging.channel_flows (
AppInstanceArn,
Processors,
Name,
Tags,
ClientRequestToken,
region
)
SELECT 
'{{ AppInstanceArn }}' /* required */,
'{{ Processors }}' /* required */,
'{{ Name }}' /* required */,
'{{ Tags }}',
'{{ ClientRequestToken }}' /* required */,
'{{ region }}'
RETURNING
ChannelFlowArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: channel_flows
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the channel_flows resource.
    - name: AppInstanceArn
      value: "{{ AppInstanceArn }}"
    - name: Processors
      value:
        - Name: "{{ Name }}"
          Configuration:
            Lambda:
              ResourceArn: "{{ ResourceArn }}"
              InvocationType: "{{ InvocationType }}"
          ExecutionOrder: {{ ExecutionOrder }}
          FallbackAction: "{{ FallbackAction }}"
    - name: Name
      value: "{{ Name }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_channel_flow"
    values={[
        { label: 'associate_channel_flow', value: 'associate_channel_flow' },
        { label: 'update_channel_flow', value: 'update_channel_flow' },
        { label: 'disassociate_channel_flow', value: 'disassociate_channel_flow' }
    ]}
>
<TabItem value="associate_channel_flow">

Associates a channel flow with a channel. Once associated, all messages to that channel go through channel flow processors. To stop processing, use the DisassociateChannelFlow API. Only administrators or channel moderators can associate a channel flow. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.

```sql
UPDATE aws.chime_sdk_messaging.channel_flows
SET 
ChannelFlowArn = '{{ ChannelFlowArn }}'
WHERE 
channel_arn = '{{ channel_arn }}' --required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}' --required
AND region = '{{ region }}' --required
AND ChannelFlowArn = '{{ ChannelFlowArn }}' --required;
```
</TabItem>
<TabItem value="update_channel_flow">

Updates channel flow attributes. This is a developer API.

```sql
UPDATE aws.chime_sdk_messaging.channel_flows
SET 
Processors = '{{ Processors }}',
Name = '{{ Name }}'
WHERE 
channel_flow_arn = '{{ channel_flow_arn }}' --required
AND region = '{{ region }}' --required
AND Processors = '{{ Processors }}' --required
AND Name = '{{ Name }}' --required
RETURNING
ChannelFlowArn;
```
</TabItem>
<TabItem value="disassociate_channel_flow">

Disassociates a channel flow from all its channels. Once disassociated, all messages to that channel stop going through the channel flow processor. Only administrators or channel moderators can disassociate a channel flow. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.

```sql
UPDATE aws.chime_sdk_messaging.channel_flows
SET 
-- No updatable properties
WHERE 
channel_arn = '{{ channel_arn }}' --required
AND channel_flow_arn = '{{ channel_flow_arn }}' --required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_channel_flow"
    values={[
        { label: 'delete_channel_flow', value: 'delete_channel_flow' }
    ]}
>
<TabItem value="delete_channel_flow">

Deletes a channel flow, an irreversible process. This is a developer API. This API works only when the channel flow is not associated with any channel. To get a list of all channels that a channel flow is associated with, use the ListChannelsAssociatedWithChannelFlow API. Use the DisassociateChannelFlow API to disassociate a channel flow from all channels.

```sql
DELETE FROM aws.chime_sdk_messaging.channel_flows
WHERE channel_flow_arn = '{{ channel_flow_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="channel_flow_callback"
    values={[
        { label: 'channel_flow_callback', value: 'channel_flow_callback' }
    ]}
>
<TabItem value="channel_flow_callback">

Calls back Amazon Chime SDK messaging with a processing response message. This should be invoked from the processor Lambda. This is a developer API. You can return one of the following processing responses: Update message content or metadata Deny a message Make no changes to the message

```sql
EXEC aws.chime_sdk_messaging.channel_flows.channel_flow_callback 
@channel_arn='{{ channel_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"CallbackId": "{{ CallbackId }}", 
"DeleteResource": {{ DeleteResource }}, 
"ChannelMessage": "{{ ChannelMessage }}"
}'
;
```
</TabItem>
</Tabs>
