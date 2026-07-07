--- 
title: channel_message_status
hide_title: false
hide_table_of_contents: false
keywords:
  - channel_message_status
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

Creates, updates, deletes, gets or lists a <code>channel_message_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="channel_message_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_messaging.channel_message_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_channel_message_status"
    values={[
        { label: 'get_channel_message_status', value: 'get_channel_message_status' }
    ]}
>
<TabItem value="get_channel_message_status">

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
    <td><CopyableCode code="Detail" /></td>
    <td><code>string</code></td>
    <td>Contains more details about the message status. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Value" /></td>
    <td><code>string</code></td>
    <td>The message status value. (SENT, PENDING, FAILED, DENIED)</td>
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
    <td><a href="#get_channel_message_status"><CopyableCode code="get_channel_message_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-message_id"><code>message_id</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-sub-channel-id"><code>sub-channel-id</code></a></td>
    <td>Gets message status for a specified messageId. Use this API to determine the intermediate status of messages going through channel flow processing. The API provides an alternative to retrieving message status if the event was not received because a client wasn't connected to a websocket. Messages can have any one of these statuses. SENT Message processed successfully PENDING Ongoing processing FAILED Processing failed DENIED Message denied by the processor This API does not return statuses for denied messages, because we don't store them once the processor denies them. Only the message sender can invoke this API. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.</td>
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
    <td>The ARN of the channel</td>
</tr>
<tr id="parameter-message_id">
    <td><CopyableCode code="message_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the message.</td>
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
<tr id="parameter-sub-channel-id">
    <td><CopyableCode code="sub-channel-id" /></td>
    <td><code>string</code></td>
    <td>The ID of the SubChannel in the request. Only required when getting message status in a SubChannel that the user belongs to.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_channel_message_status"
    values={[
        { label: 'get_channel_message_status', value: 'get_channel_message_status' }
    ]}
>
<TabItem value="get_channel_message_status">

Gets message status for a specified messageId. Use this API to determine the intermediate status of messages going through channel flow processing. The API provides an alternative to retrieving message status if the event was not received because a client wasn't connected to a websocket. Messages can have any one of these statuses. SENT Message processed successfully PENDING Ongoing processing FAILED Processing failed DENIED Message denied by the processor This API does not return statuses for denied messages, because we don't store them once the processor denies them. Only the message sender can invoke this API. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.

```sql
SELECT
Detail,
Value
FROM aws.chime_sdk_messaging.channel_message_status
WHERE channel_arn = '{{ channel_arn }}' -- required
AND message_id = '{{ message_id }}' -- required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}' -- required
AND region = '{{ region }}' -- required
AND `sub-channel-id` = '{{ sub-channel-id }}'
;
```
</TabItem>
</Tabs>
