--- 
title: managed_notification_events
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_notification_events
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

Creates, updates, deletes, gets or lists a <code>managed_notification_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_notification_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.notifications.managed_notification_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_managed_notification_event"
    values={[
        { label: 'get_managed_notification_event', value: 'get_managed_notification_event' },
        { label: 'list_managed_notification_events', value: 'list_managed_notification_events' }
    ]}
>
<TabItem value="get_managed_notification_event">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the resource. (pattern: &lt;code&gt;arn:&#91;-.a-z0-9&#93;&#123;1,63&#125;:notifications::&#91;0-9&#93;&#123;12&#125;:managed-notification-configuration/category/&#91;a-zA-Z0-9\-&#93;&#123;3,64&#125;/sub-category/&#91;a-zA-Z0-9\-&#93;&#123;3,64&#125;/event/&#91;a-z0-9&#93;&#123;27&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>The content of the ManagedNotificationEvent.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the ManagedNotificationEvent.</td>
</tr>
<tr>
    <td><CopyableCode code="managedNotificationConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the ManagedNotificationConfiguration. (pattern: &lt;code&gt;arn:&#91;-.a-z0-9&#93;&#123;1,63&#125;:notifications::&#91;0-9&#93;&#123;12&#125;:managed-notification-configuration/category/&#91;a-zA-Z0-9\-&#93;&#123;3,64&#125;/sub-category/&#91;a-zA-Z0-9\-&#93;&#123;3,64&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_managed_notification_events">

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
    <td><CopyableCode code="aggregatedNotificationRegions" /></td>
    <td><code>array</code></td>
    <td>The list of the regions where the aggregated notifications in this NotificationEvent originated.</td>
</tr>
<tr>
    <td><CopyableCode code="aggregationEventType" /></td>
    <td><code>string</code></td>
    <td>The notifications aggregation type. Values: AGGREGATE The notification event is an aggregate notification. Aggregate notifications summarize grouped events over a specified time period. CHILD Some EventRules are ACTIVE and some are INACTIVE. Any call can be run. NONE The notification isn't aggregated. (AGGREGATE, CHILD, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="aggregationSummary" /></td>
    <td><code>object</code></td>
    <td>Provides additional information about the aggregation key.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ManagedNotificationEvent. (pattern: &lt;code&gt;arn:&#91;-.a-z0-9&#93;&#123;1,63&#125;:notifications::&#91;0-9&#93;&#123;12&#125;:managed-notification-configuration/category/&#91;a-zA-Z0-9\-&#93;&#123;3,64&#125;/sub-category/&#91;a-zA-Z0-9\-&#93;&#123;3,64&#125;/event/&#91;a-z0-9&#93;&#123;27&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the ManagedNotificationEvent.</td>
</tr>
<tr>
    <td><CopyableCode code="managedNotificationConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ManagedNotificationConfiguration. (pattern: &lt;code&gt;arn:&#91;-.a-z0-9&#93;&#123;1,63&#125;:notifications::&#91;0-9&#93;&#123;12&#125;:managed-notification-configuration/category/&#91;a-zA-Z0-9\-&#93;&#123;3,64&#125;/sub-category/&#91;a-zA-Z0-9\-&#93;&#123;3,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="notificationEvent" /></td>
    <td><code>object</code></td>
    <td>A short summary of a ManagedNotificationEvent. This is only used when listing managed notification events.</td>
</tr>
<tr>
    <td><CopyableCode code="organizationalUnitId" /></td>
    <td><code>string</code></td>
    <td>The Organizational Unit Id that an Amazon Web Services account belongs to. (pattern: &lt;code&gt;(Root|r-&#91;0-9a-z&#93;&#123;4,32&#125;|ou-&#91;0-9a-z&#93;&#123;4,32&#125;-&#91;a-z0-9&#93;&#123;8,32&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="relatedAccount" /></td>
    <td><code>string</code></td>
    <td>The account that related to the ManagedNotificationEvent. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_managed_notification_event"><CopyableCode code="get_managed_notification_event" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-locale"><code>locale</code></a></td>
    <td>Returns a specified ManagedNotificationEvent.</td>
</tr>
<tr>
    <td><a href="#list_managed_notification_events"><CopyableCode code="list_managed_notification_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-locale"><code>locale</code></a>, <a href="#parameter-source"><code>source</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-organizationalUnitId"><code>organizationalUnitId</code></a>, <a href="#parameter-relatedAccount"><code>relatedAccount</code></a></td>
    <td>Returns a list of Managed Notification Events according to specified filters, ordered by creation time in reverse chronological order (newest first).</td>
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
    <td>The Amazon Resource Name (ARN) of the ManagedNotificationEvent to return.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-endTime">
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Latest time of events to return from this call.</td>
</tr>
<tr id="parameter-locale">
    <td><CopyableCode code="locale" /></td>
    <td><code>string</code></td>
    <td>The locale code of the language used for the retrieved NotificationEvent. The default locale is English (en_US).</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned in this call. Defaults to 20.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The start token for paginated calls. Retrieved from the response of a previous ListManagedNotificationChannelAssociations call. Next token uses Base64 encoding.</td>
</tr>
<tr id="parameter-organizationalUnitId">
    <td><CopyableCode code="organizationalUnitId" /></td>
    <td><code>string</code></td>
    <td>The Organizational Unit Id that an Amazon Web Services account belongs to.</td>
</tr>
<tr id="parameter-relatedAccount">
    <td><CopyableCode code="relatedAccount" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID associated with the Managed Notification Events.</td>
</tr>
<tr id="parameter-source">
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service the event originates from. For example aws.cloudwatch.</td>
</tr>
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The earliest time of events to return from this call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_managed_notification_event"
    values={[
        { label: 'get_managed_notification_event', value: 'get_managed_notification_event' },
        { label: 'list_managed_notification_events', value: 'list_managed_notification_events' }
    ]}
>
<TabItem value="get_managed_notification_event">

Returns a specified ManagedNotificationEvent.

```sql
SELECT
arn,
content,
creationTime,
managedNotificationConfigurationArn
FROM aws.notifications.managed_notification_events
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
AND locale = '{{ locale }}'
;
```
</TabItem>
<TabItem value="list_managed_notification_events">

Returns a list of Managed Notification Events according to specified filters, ordered by creation time in reverse chronological order (newest first).

```sql
SELECT
aggregatedNotificationRegions,
aggregationEventType,
aggregationSummary,
arn,
creationTime,
managedNotificationConfigurationArn,
notificationEvent,
organizationalUnitId,
relatedAccount
FROM aws.notifications.managed_notification_events
WHERE region = '{{ region }}' -- required
AND startTime = '{{ startTime }}'
AND endTime = '{{ endTime }}'
AND locale = '{{ locale }}'
AND source = '{{ source }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND organizationalUnitId = '{{ organizationalUnitId }}'
AND relatedAccount = '{{ relatedAccount }}'
;
```
</TabItem>
</Tabs>
