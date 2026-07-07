--- 
title: channels
hide_title: false
hide_table_of_contents: false
keywords:
  - channels
  - notifications
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.notifications.channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_channels"
    values={[
        { label: 'list_channels', value: 'list_channels' }
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
    <td><CopyableCode code="channel" /></td>
    <td><code>string</code></td>
    <td>A list of Channels.</td>
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
    <td><a href="#parameter-notificationConfigurationArn"><code>notificationConfigurationArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of Channels for a NotificationConfiguration.</td>
</tr>
<tr>
    <td><a href="#associate_channel"><CopyableCode code="associate_channel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-notificationConfigurationArn"><code>notificationConfigurationArn</code></a></td>
    <td></td>
    <td>Associates a delivery Channel with a particular NotificationConfiguration. Supported Channels include Amazon Q Developer in chat applications, the Console Mobile Application, and emails (notifications-contacts).</td>
</tr>
<tr>
    <td><a href="#associate_managed_notification_additional_channel"><CopyableCode code="associate_managed_notification_additional_channel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-managedNotificationConfigurationArn"><code>managedNotificationConfigurationArn</code></a></td>
    <td></td>
    <td>Associates an additional Channel with a particular ManagedNotificationConfiguration. Supported Channels include Amazon Q Developer in chat applications, the Console Mobile Application, and emails (notifications-contacts).</td>
</tr>
<tr>
    <td><a href="#disassociate_channel"><CopyableCode code="disassociate_channel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-notificationConfigurationArn"><code>notificationConfigurationArn</code></a></td>
    <td></td>
    <td>Disassociates a Channel from a specified NotificationConfiguration. Supported Channels include Amazon Q Developer in chat applications, the Console Mobile Application, and emails (notifications-contacts).</td>
</tr>
<tr>
    <td><a href="#disassociate_managed_notification_additional_channel"><CopyableCode code="disassociate_managed_notification_additional_channel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-managedNotificationConfigurationArn"><code>managedNotificationConfigurationArn</code></a></td>
    <td></td>
    <td>Disassociates an additional Channel from a particular ManagedNotificationConfiguration. Supported Channels include Amazon Q Developer in chat applications, the Console Mobile Application, and emails (notifications-contacts).</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Channel to disassociate.</td>
</tr>
<tr id="parameter-channel_arn">
    <td><CopyableCode code="channel_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Channel to associate with the ManagedNotificationConfiguration.</td>
</tr>
<tr id="parameter-notificationConfigurationArn">
    <td><CopyableCode code="notificationConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the NotificationConfiguration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned in this call. The default value is 20.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The start token for paginated calls. Retrieved from the response of a previous ListNotificationEvents call. NextToken uses Base64 encoding.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_channels"
    values={[
        { label: 'list_channels', value: 'list_channels' }
    ]}
>
<TabItem value="list_channels">

Returns a list of Channels for a NotificationConfiguration.

```sql
SELECT
channel
FROM aws.notifications.channels
WHERE notificationConfigurationArn = '{{ notificationConfigurationArn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_channel"
    values={[
        { label: 'associate_channel', value: 'associate_channel' },
        { label: 'associate_managed_notification_additional_channel', value: 'associate_managed_notification_additional_channel' }
    ]}
>
<TabItem value="associate_channel">

Associates a delivery Channel with a particular NotificationConfiguration. Supported Channels include Amazon Q Developer in chat applications, the Console Mobile Application, and emails (notifications-contacts).

```sql
UPDATE aws.notifications.channels
SET 
notificationConfigurationArn = '{{ notificationConfigurationArn }}'
WHERE 
arn = '{{ arn }}' --required
AND region = '{{ region }}' --required
AND notificationConfigurationArn = '{{ notificationConfigurationArn }}' --required;
```
</TabItem>
<TabItem value="associate_managed_notification_additional_channel">

Associates an additional Channel with a particular ManagedNotificationConfiguration. Supported Channels include Amazon Q Developer in chat applications, the Console Mobile Application, and emails (notifications-contacts).

```sql
UPDATE aws.notifications.channels
SET 
managedNotificationConfigurationArn = '{{ managedNotificationConfigurationArn }}'
WHERE 
channel_arn = '{{ channel_arn }}' --required
AND region = '{{ region }}' --required
AND managedNotificationConfigurationArn = '{{ managedNotificationConfigurationArn }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_channel"
    values={[
        { label: 'disassociate_channel', value: 'disassociate_channel' },
        { label: 'disassociate_managed_notification_additional_channel', value: 'disassociate_managed_notification_additional_channel' }
    ]}
>
<TabItem value="disassociate_channel">

Disassociates a Channel from a specified NotificationConfiguration. Supported Channels include Amazon Q Developer in chat applications, the Console Mobile Application, and emails (notifications-contacts).

```sql
EXEC aws.notifications.channels.disassociate_channel 
@arn='{{ arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"notificationConfigurationArn": "{{ notificationConfigurationArn }}"
}'
;
```
</TabItem>
<TabItem value="disassociate_managed_notification_additional_channel">

Disassociates an additional Channel from a particular ManagedNotificationConfiguration. Supported Channels include Amazon Q Developer in chat applications, the Console Mobile Application, and emails (notifications-contacts).

```sql
EXEC aws.notifications.channels.disassociate_managed_notification_additional_channel 
@channel_arn='{{ channel_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"managedNotificationConfigurationArn": "{{ managedNotificationConfigurationArn }}"
}'
;
```
</TabItem>
</Tabs>
