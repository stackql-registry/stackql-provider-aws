--- 
title: managed_notification_channel_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_notification_channel_associations
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

Creates, updates, deletes, gets or lists a <code>managed_notification_channel_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_notification_channel_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.notifications.managed_notification_channel_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_managed_notification_channel_associations"
    values={[
        { label: 'list_managed_notification_channel_associations', value: 'list_managed_notification_channel_associations' }
    ]}
>
<TabItem value="list_managed_notification_channel_associations">

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
    <td><CopyableCode code="channelIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the notification channel.</td>
</tr>
<tr>
    <td><CopyableCode code="channelType" /></td>
    <td><code>string</code></td>
    <td>The type of notification channel used for message delivery. Values: ACCOUNT_CONTACT Delivers notifications to Account Managed contacts through the User Notification Service. MOBILE Delivers notifications through the Amazon Web Services Console Mobile Application to mobile devices. CHATBOT Delivers notifications through Amazon Q Developer in chat applications to collaboration platforms (Slack, Chime). EMAIL Delivers notifications to email addresses. (MOBILE, CHATBOT, EMAIL, ACCOUNT_CONTACT)</td>
</tr>
<tr>
    <td><CopyableCode code="overrideOption" /></td>
    <td><code>string</code></td>
    <td>Controls whether users can modify channel associations for a notification configuration. Values: ENABLED Users can associate or disassociate channels with the notification configuration. DISABLED Users cannot associate or disassociate channels with the notification configuration. (ENABLED, DISABLED)</td>
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
    <td><a href="#list_managed_notification_channel_associations"><CopyableCode code="list_managed_notification_channel_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-managedNotificationConfigurationArn"><code>managedNotificationConfigurationArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of Account contacts and Channels associated with a ManagedNotificationConfiguration, in paginated format.</td>
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
<tr id="parameter-managedNotificationConfigurationArn">
    <td><CopyableCode code="managedNotificationConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ManagedNotificationConfiguration to match.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned in this call. Defaults to 20.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The start token for paginated calls. Retrieved from the response of a previous ListManagedNotificationChannelAssociations call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_managed_notification_channel_associations"
    values={[
        { label: 'list_managed_notification_channel_associations', value: 'list_managed_notification_channel_associations' }
    ]}
>
<TabItem value="list_managed_notification_channel_associations">

Returns a list of Account contacts and Channels associated with a ManagedNotificationConfiguration, in paginated format.

```sql
SELECT
channelIdentifier,
channelType,
overrideOption
FROM aws.notifications.managed_notification_channel_associations
WHERE managedNotificationConfigurationArn = '{{ managedNotificationConfigurationArn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
