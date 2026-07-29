--- 
title: notification_events
hide_title: false
hide_table_of_contents: false
keywords:
  - notification_events
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

Creates, updates, deletes, gets or lists a <code>notification_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notification_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.notifications.notification_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_notification_event"
    values={[
        { label: 'get_notification_event', value: 'get_notification_event' },
        { label: 'list_notification_events', value: 'list_notification_events' }
    ]}
>
<TabItem value="get_notification_event">

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
    <td>The ARN of the resource. (pattern: &lt;code&gt;arn:&#91;-.a-z0-9&#93;&#123;1,63&#125;:notifications:&#91;-.a-z0-9&#93;&#123;1,63&#125;:&#91;0-9&#93;&#123;12&#125;:configuration/&#91;a-z0-9&#93;&#123;27&#125;/event/&#91;a-z0-9&#93;&#123;27&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>The content of the NotificationEvent.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the NotificationEvent.</td>
</tr>
<tr>
    <td><CopyableCode code="notification_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the NotificationConfiguration. (pattern: &lt;code&gt;arn:aws:notifications::&#91;0-9&#93;&#123;12&#125;:configuration/&#91;a-z0-9&#93;&#123;27&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_notification_events">

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
    <td><CopyableCode code="aggregate_notification_event_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the aggregatedNotificationEventArn to match. (pattern: &lt;code&gt;arn:&#91;-.a-z0-9&#93;&#123;1,63&#125;:notifications:&#91;-.a-z0-9&#93;&#123;1,63&#125;:&#91;0-9&#93;&#123;12&#125;:configuration/&#91;a-z0-9&#93;&#123;27&#125;/event/&#91;a-z0-9&#93;&#123;27&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="aggregation_event_type" /></td>
    <td><code>string</code></td>
    <td>The NotificationConfiguration's aggregation type. Values: AGGREGATE The notification event is an aggregate notification. Aggregate notifications summarize grouped events over a specified time period. CHILD Some EventRules are ACTIVE and some are INACTIVE. Any call can be run. NONE The notification isn't aggregated. (AGGREGATE, CHILD, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="aggregation_summary" /></td>
    <td><code>object</code></td>
    <td>Provides additional information about the aggregation key.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource. (pattern: &lt;code&gt;arn:&#91;-.a-z0-9&#93;&#123;1,63&#125;:notifications:&#91;-.a-z0-9&#93;&#123;1,63&#125;:&#91;0-9&#93;&#123;12&#125;:configuration/&#91;a-z0-9&#93;&#123;27&#125;/event/&#91;a-z0-9&#93;&#123;27&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the NotificationEvent.</td>
</tr>
<tr>
    <td><CopyableCode code="notification_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the NotificationConfiguration. (pattern: &lt;code&gt;arn:aws:notifications::&#91;0-9&#93;&#123;12&#125;:configuration/&#91;a-z0-9&#93;&#123;27&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="notification_event" /></td>
    <td><code>object</code></td>
    <td>Refers to a NotificationEventSummary object. Similar in structure to content in the GetNotificationEvent response.</td>
</tr>
<tr>
    <td><CopyableCode code="organizational_unit_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the organizational unit in the notification event overview. (pattern: &lt;code&gt;(Root|r-&#91;0-9a-z&#93;&#123;4,32&#125;|ou-&#91;0-9a-z&#93;&#123;4,32&#125;-&#91;a-z0-9&#93;&#123;8,32&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="related_account" /></td>
    <td><code>string</code></td>
    <td>The account name containing the NotificationHub. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_notification_event"><CopyableCode code="get_notification_event" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-locale"><code>locale</code></a></td>
    <td>Returns a specified NotificationEvent. User Notifications stores notifications in the individual Regions you register as notification hubs and the Region of the source event rule. GetNotificationEvent only returns notifications stored in the same Region in which the action is called. User Notifications doesn't backfill notifications to new Regions selected as notification hubs. For this reason, we recommend that you make calls in your oldest registered notification hub. For more information, see Notification hubs in the Amazon Web Services User Notifications User Guide.</td>
</tr>
<tr>
    <td><a href="#list_notification_events"><CopyableCode code="list_notification_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-locale"><code>locale</code></a>, <a href="#parameter-source"><code>source</code></a>, <a href="#parameter-includeChildEvents"><code>includeChildEvents</code></a>, <a href="#parameter-aggregateNotificationEventArn"><code>aggregateNotificationEventArn</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-organizationalUnitId"><code>organizationalUnitId</code></a></td>
    <td>Returns a list of NotificationEvents according to specified filters, in reverse chronological order (newest first). User Notifications stores notifications in the individual Regions you register as notification hubs and the Region of the source event rule. ListNotificationEvents only returns notifications stored in the same Region in which the action is called. User Notifications doesn't backfill notifications to new Regions selected as notification hubs. For this reason, we recommend that you make calls in your oldest registered notification hub. For more information, see Notification hubs in the Amazon Web Services User Notifications User Guide.</td>
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
    <td>The Amazon Resource Name (ARN) of the NotificationEvent to return.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-aggregateNotificationEventArn">
    <td><CopyableCode code="aggregateNotificationEventArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the aggregatedNotificationEventArn to match.</td>
</tr>
<tr id="parameter-endTime">
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Latest time of events to return from this call.</td>
</tr>
<tr id="parameter-includeChildEvents">
    <td><CopyableCode code="includeChildEvents" /></td>
    <td><code>boolean</code></td>
    <td>Include aggregated child events in the result.</td>
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
    <td>The start token for paginated calls. Retrieved from the response of a previous ListEventRules call. Next token uses Base64 encoding.</td>
</tr>
<tr id="parameter-organizationalUnitId">
    <td><CopyableCode code="organizationalUnitId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the organizational unit used to filter notification events.</td>
</tr>
<tr id="parameter-source">
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The matched event source. Must match one of the valid EventBridge sources. Only Amazon Web Services service sourced events are supported. For example, aws.ec2 and aws.cloudwatch. For more information, see Event delivery from Amazon Web Services services in the Amazon EventBridge User Guide.</td>
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
    defaultValue="get_notification_event"
    values={[
        { label: 'get_notification_event', value: 'get_notification_event' },
        { label: 'list_notification_events', value: 'list_notification_events' }
    ]}
>
<TabItem value="get_notification_event">

Returns a specified NotificationEvent. User Notifications stores notifications in the individual Regions you register as notification hubs and the Region of the source event rule. GetNotificationEvent only returns notifications stored in the same Region in which the action is called. User Notifications doesn't backfill notifications to new Regions selected as notification hubs. For this reason, we recommend that you make calls in your oldest registered notification hub. For more information, see Notification hubs in the Amazon Web Services User Notifications User Guide.

```sql
SELECT
arn,
content,
creation_time,
notification_configuration_arn
FROM aws.notifications.notification_events
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
AND locale = '{{ locale }}'
;
```
</TabItem>
<TabItem value="list_notification_events">

Returns a list of NotificationEvents according to specified filters, in reverse chronological order (newest first). User Notifications stores notifications in the individual Regions you register as notification hubs and the Region of the source event rule. ListNotificationEvents only returns notifications stored in the same Region in which the action is called. User Notifications doesn't backfill notifications to new Regions selected as notification hubs. For this reason, we recommend that you make calls in your oldest registered notification hub. For more information, see Notification hubs in the Amazon Web Services User Notifications User Guide.

```sql
SELECT
aggregate_notification_event_arn,
aggregation_event_type,
aggregation_summary,
arn,
creation_time,
notification_configuration_arn,
notification_event,
organizational_unit_id,
related_account
FROM aws.notifications.notification_events
WHERE region = '{{ region }}' -- required
AND startTime = '{{ startTime }}'
AND endTime = '{{ endTime }}'
AND locale = '{{ locale }}'
AND source = '{{ source }}'
AND includeChildEvents = '{{ includeChildEvents }}'
AND aggregateNotificationEventArn = '{{ aggregateNotificationEventArn }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND organizationalUnitId = '{{ organizationalUnitId }}'
;
```
</TabItem>
</Tabs>
