--- 
title: channel_memberships_for_app_instance_users
hide_title: false
hide_table_of_contents: false
keywords:
  - channel_memberships_for_app_instance_users
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

Creates, updates, deletes, gets or lists a <code>channel_memberships_for_app_instance_users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="channel_memberships_for_app_instance_users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_messaging.channel_memberships_for_app_instance_users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_channel_memberships_for_app_instance_user"
    values={[
        { label: 'list_channel_memberships_for_app_instance_user', value: 'list_channel_memberships_for_app_instance_user' }
    ]}
>
<TabItem value="list_channel_memberships_for_app_instance_user">

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
    <td><CopyableCode code="ChannelMemberships" /></td>
    <td><code>array</code></td>
    <td>The information for the requested channel memberships.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token passed by previous API calls until all requested users are returned. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#list_channel_memberships_for_app_instance_user"><CopyableCode code="list_channel_memberships_for_app_instance_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-chime-bearer"><code>x-amz-chime-bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-app-instance-user-arn"><code>app-instance-user-arn</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Lists all channels that an AppInstanceUser or AppInstanceBot is a part of. Only an AppInstanceAdmin can call the API with a user ARN that is not their own. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.</td>
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
<tr id="parameter-app-instance-user-arn">
    <td><CopyableCode code="app-instance-user-arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the user or bot.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of users that you want returned.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token returned from previous API requests until the number of channel memberships is reached.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_channel_memberships_for_app_instance_user"
    values={[
        { label: 'list_channel_memberships_for_app_instance_user', value: 'list_channel_memberships_for_app_instance_user' }
    ]}
>
<TabItem value="list_channel_memberships_for_app_instance_user">

Lists all channels that an AppInstanceUser or AppInstanceBot is a part of. Only an AppInstanceAdmin can call the API with a user ARN that is not their own. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.

```sql
SELECT
ChannelMemberships,
NextToken
FROM aws.chime_sdk_messaging.channel_memberships_for_app_instance_users
WHERE `x-amz-chime-bearer` = '{{ x-amz-chime-bearer }}' -- required
AND region = '{{ region }}' -- required
AND `app-instance-user-arn` = '{{ app-instance-user-arn }}'
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>
