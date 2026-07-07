--- 
title: user_notifications
hide_title: false
hide_table_of_contents: false
keywords:
  - user_notifications
  - connect
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

Creates, updates, deletes, gets or lists a <code>user_notifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_notifications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.user_notifications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_user_notifications"
    values={[
        { label: 'list_user_notifications', value: 'list_user_notifications' }
    ]}
>
<TabItem value="list_user_notifications">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. If present, there are more results available.</td>
</tr>
<tr>
    <td><CopyableCode code="UserNotifications" /></td>
    <td><code>array</code></td>
    <td>A list of notifications sent to the specified user.</td>
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
    <td><a href="#list_user_notifications"><CopyableCode code="list_user_notifications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a paginated list of notifications for a specific user, including the notification status for that user.</td>
</tr>
<tr>
    <td><a href="#update_user_notification_status"><CopyableCode code="update_user_notification_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-notification_id"><code>notification_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Status"><code>Status</code></a></td>
    <td><a href="#parameter-x-amz-last-modified-time"><code>x-amz-last-modified-time</code></a>, <a href="#parameter-x-amz-last-modified-region"><code>x-amz-last-modified-region</code></a></td>
    <td>Updates the status of a notification for a specific user, such as marking it as read or hidden. Users can only update notification status for notifications that have been sent to them. READ status deprioritizes the notification and greys it out, while HIDDEN status removes it from the notification widget.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-notification_id">
    <td><CopyableCode code="notification_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the notification.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user whose notification status is being updated.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page. Valid range is 1-1000.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response to retrieve the next page of results.</td>
</tr>
<tr id="parameter-x-amz-last-modified-region">
    <td><CopyableCode code="x-amz-last-modified-region" /></td>
    <td><code>string</code></td>
    <td>The AWS Region where the notification status was last modified. Used for cross-region replication.</td>
</tr>
<tr id="parameter-x-amz-last-modified-time">
    <td><CopyableCode code="x-amz-last-modified-time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the notification status was last modified. Used for cross-region replication and optimistic locking.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_user_notifications"
    values={[
        { label: 'list_user_notifications', value: 'list_user_notifications' }
    ]}
>
<TabItem value="list_user_notifications">

Retrieves a paginated list of notifications for a specific user, including the notification status for that user.

```sql
SELECT
NextToken,
UserNotifications
FROM aws.connect.user_notifications
WHERE instance_id = '{{ instance_id }}' -- required
AND user_id = '{{ user_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_user_notification_status"
    values={[
        { label: 'update_user_notification_status', value: 'update_user_notification_status' }
    ]}
>
<TabItem value="update_user_notification_status">

Updates the status of a notification for a specific user, such as marking it as read or hidden. Users can only update notification status for notifications that have been sent to them. READ status deprioritizes the notification and greys it out, while HIDDEN status removes it from the notification widget.

```sql
UPDATE aws.connect.user_notifications
SET 
Status = '{{ Status }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND notification_id = '{{ notification_id }}' --required
AND user_id = '{{ user_id }}' --required
AND region = '{{ region }}' --required
AND Status = '{{ Status }}' --required
AND `x-amz-last-modified-time` = '{{ x-amz-last-modified-time}}'
AND `x-amz-last-modified-region` = '{{ x-amz-last-modified-region}}';
```
</TabItem>
</Tabs>
