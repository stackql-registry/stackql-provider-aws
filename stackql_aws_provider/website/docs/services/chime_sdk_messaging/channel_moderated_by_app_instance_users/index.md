--- 
title: channel_moderated_by_app_instance_users
hide_title: false
hide_table_of_contents: false
keywords:
  - channel_moderated_by_app_instance_users
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

Creates, updates, deletes, gets or lists a <code>channel_moderated_by_app_instance_users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="channel_moderated_by_app_instance_users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_messaging.channel_moderated_by_app_instance_users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_channel_moderated_by_app_instance_user"
    values={[
        { label: 'describe_channel_moderated_by_app_instance_user', value: 'describe_channel_moderated_by_app_instance_user' }
    ]}
>
<TabItem value="describe_channel_moderated_by_app_instance_user">

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
    <td><CopyableCode code="ChannelSummary" /></td>
    <td><code>object</code></td>
    <td>Summary of the details of a Channel.</td>
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
    <td><a href="#describe_channel_moderated_by_app_instance_user"><CopyableCode code="describe_channel_moderated_by_app_instance_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-app-instance-user-arn"><code>app-instance-user-arn</code></a>, <a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the full details of a channel moderated by the specified AppInstanceUser or AppInstanceBot. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.</td>
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
<tr id="parameter-app-instance-user-arn">
    <td><CopyableCode code="app-instance-user-arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the user or bot in the moderated channel.</td>
</tr>
<tr id="parameter-channel_arn">
    <td><CopyableCode code="channel_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the moderated channel.</td>
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
    defaultValue="describe_channel_moderated_by_app_instance_user"
    values={[
        { label: 'describe_channel_moderated_by_app_instance_user', value: 'describe_channel_moderated_by_app_instance_user' }
    ]}
>
<TabItem value="describe_channel_moderated_by_app_instance_user">

Returns the full details of a channel moderated by the specified AppInstanceUser or AppInstanceBot. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.

```sql
SELECT
ChannelSummary
FROM aws.chime_sdk_messaging.channel_moderated_by_app_instance_users
WHERE channel_arn = '{{ channel_arn }}' -- required
AND `app-instance-user-arn` = '{{ app-instance-user-arn }}' -- required
AND `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
