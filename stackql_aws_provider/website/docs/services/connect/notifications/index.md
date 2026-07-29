--- 
title: notifications
hide_title: false
hide_table_of_contents: false
keywords:
  - notifications
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

Creates, updates, deletes, gets or lists a <code>notifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notifications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.notifications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_notification"
    values={[
        { label: 'describe_notification', value: 'describe_notification' },
        { label: 'list_notifications', value: 'list_notifications' },
        { label: 'search_notifications', value: 'search_notifications' }
    ]}
>
<TabItem value="describe_notification">

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
    <td>The Amazon Resource Name (ARN) of the notification.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>The localized content of the notification. A map where keys are locale codes and values are the notification text in that locale.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the notification was created.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the notification expires and is no longer displayed to users.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for a notification.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The AWS Region where the notification was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the notification was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>string</code></td>
    <td>The priority level of the notification. Valid values are URGENT, HIGH, and LOW. (URGENT, HIGH, LOW)</td>
</tr>
<tr>
    <td><CopyableCode code="recipients" /></td>
    <td><code>array</code></td>
    <td>A list of recipient Amazon Resource Names (ARNs). Maximum of 200 recipients.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_notifications">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. If present, there are more results available.</td>
</tr>
<tr>
    <td><CopyableCode code="notification_summary_list" /></td>
    <td><code>array</code></td>
    <td>A list of notification summaries.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_notifications">

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
    <td><CopyableCode code="approximate_total_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The approximate total number of notifications matching the search criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. If present, there are more results available.</td>
</tr>
<tr>
    <td><CopyableCode code="notifications" /></td>
    <td><code>array</code></td>
    <td>A list of notifications matching the search criteria.</td>
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
    <td><a href="#describe_notification"><CopyableCode code="describe_notification" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-notification_id"><code>notification_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific notification, including its content, priority, recipients, and metadata.</td>
</tr>
<tr>
    <td><a href="#list_notifications"><CopyableCode code="list_notifications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a paginated list of all notifications in the Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#search_notifications"><CopyableCode code="search_notifications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for notifications based on specified criteria and filters. Returns a paginated list of notifications matching the search parameters, ordered by descending creation time. Supports filtering by content and tags.</td>
</tr>
<tr>
    <td><a href="#create_notification"><CopyableCode code="create_notification" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Recipients"><code>Recipients</code></a>, <a href="#parameter-Content"><code>Content</code></a></td>
    <td></td>
    <td>Creates a new notification to be delivered to specified recipients. Notifications can include localized content with links, and an optional expiration time. Recipients can be specified as individual user ARNs or instance ARNs to target all users in an instance.</td>
</tr>
<tr>
    <td><a href="#update_notification_content"><CopyableCode code="update_notification_content" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-notification_id"><code>notification_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Content"><code>Content</code></a></td>
    <td></td>
    <td>Updates the localized content of an existing notification. This operation applies to all users for whom the notification was sent.</td>
</tr>
<tr>
    <td><a href="#delete_notification"><CopyableCode code="delete_notification" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-notification_id"><code>notification_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a notification. Once deleted, the notification is no longer visible to all users and cannot be managed through the Admin Website or APIs.</td>
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
    <td>The unique identifier for the notification to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page. Valid range is 1-100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_notification"
    values={[
        { label: 'describe_notification', value: 'describe_notification' },
        { label: 'list_notifications', value: 'list_notifications' },
        { label: 'search_notifications', value: 'search_notifications' }
    ]}
>
<TabItem value="describe_notification">

Retrieves detailed information about a specific notification, including its content, priority, recipients, and metadata.

```sql
SELECT
arn,
content,
created_at,
expires_at,
id,
last_modified_region,
last_modified_time,
priority,
recipients,
tags
FROM aws.connect.notifications
WHERE instance_id = '{{ instance_id }}' -- required
AND notification_id = '{{ notification_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_notifications">

Retrieves a paginated list of all notifications in the Amazon Connect instance.

```sql
SELECT
next_token,
notification_summary_list
FROM aws.connect.notifications
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="search_notifications">

Searches for notifications based on specified criteria and filters. Returns a paginated list of notifications matching the search parameters, ordered by descending creation time. Supports filtering by content and tags.

```sql
SELECT
approximate_total_count,
next_token,
notifications
FROM aws.connect.notifications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_notification"
    values={[
        { label: 'create_notification', value: 'create_notification' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_notification">

Creates a new notification to be delivered to specified recipients. Notifications can include localized content with links, and an optional expiration time. Recipients can be specified as individual user ARNs or instance ARNs to target all users in an instance.

```sql
INSERT INTO aws.connect.notifications (
ExpiresAt,
Recipients,
Priority,
Content,
Tags,
PredefinedNotificationId,
ClientToken,
instance_id,
region
)
SELECT 
'{{ ExpiresAt }}',
'{{ Recipients }}' /* required */,
'{{ Priority }}',
'{{ Content }}' /* required */,
'{{ Tags }}',
'{{ PredefinedNotificationId }}',
'{{ ClientToken }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
notification_arn,
notification_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: notifications
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the notifications resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the notifications resource.
    - name: ExpiresAt
      value: "{{ ExpiresAt }}"
    - name: Recipients
      value:
        - "{{ Recipients }}"
      description: |
        A list of recipient Amazon Resource Names (ARNs). Maximum of 200 recipients.
    - name: Priority
      value: "{{ Priority }}"
      description: |
        The priority level that can be set when creating a customer notification. Valid values are HIGH and LOW. URGENT priority is reserved for system-generated notifications.
      valid_values: ['HIGH', 'LOW']
    - name: Content
      value: "{{ Content }}"
      description: |
        A map of localized notification content where keys are locale codes and values are the notification text in that locale. Each localized string can be 0-500 characters.
    - name: Tags
      value: "{{ Tags }}"
    - name: PredefinedNotificationId
      value: "{{ PredefinedNotificationId }}"
      description: |
        The unique identifier for a notification.
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_notification_content"
    values={[
        { label: 'update_notification_content', value: 'update_notification_content' }
    ]}
>
<TabItem value="update_notification_content">

Updates the localized content of an existing notification. This operation applies to all users for whom the notification was sent.

```sql
UPDATE aws.connect.notifications
SET 
Content = '{{ Content }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND notification_id = '{{ notification_id }}' --required
AND region = '{{ region }}' --required
AND Content = '{{ Content }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_notification"
    values={[
        { label: 'delete_notification', value: 'delete_notification' }
    ]}
>
<TabItem value="delete_notification">

Deletes a notification. Once deleted, the notification is no longer visible to all users and cannot be managed through the Admin Website or APIs.

```sql
DELETE FROM aws.connect.notifications
WHERE instance_id = '{{ instance_id }}' --required
AND notification_id = '{{ notification_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
