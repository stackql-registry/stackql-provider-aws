--- 
title: notification_hubs
hide_title: false
hide_table_of_contents: false
keywords:
  - notification_hubs
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

Creates, updates, deletes, gets or lists a <code>notification_hubs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notification_hubs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.notifications.notification_hubs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_notification_hubs"
    values={[
        { label: 'list_notification_hubs', value: 'list_notification_hubs' }
    ]}
>
<TabItem value="list_notification_hubs">

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
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the NotificationHubOverview was created.</td>
</tr>
<tr>
    <td><CopyableCode code="lastActivationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time this NotificationHub had an ACTIVE status.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationHubRegion" /></td>
    <td><code>string</code></td>
    <td>The Region of the resource. (pattern: &lt;code&gt;(&#91;a-z&#93;&#123;1,2&#125;)-(&#91;a-z&#93;&#123;1,15&#125;-)+(&#91;0-9&#93;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="statusSummary" /></td>
    <td><code>object</code></td>
    <td>The status summary of the resource.</td>
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
    <td><a href="#list_notification_hubs"><CopyableCode code="list_notification_hubs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of NotificationHubs.</td>
</tr>
<tr>
    <td><a href="#register_notification_hub"><CopyableCode code="register_notification_hub" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-notificationHubRegion"><code>notificationHubRegion</code></a></td>
    <td></td>
    <td>Registers a NotificationConfiguration in the specified Region. There is a maximum of one NotificationConfiguration per Region. You can have a maximum of 3 NotificationHub resources at a time.</td>
</tr>
<tr>
    <td><a href="#deregister_notification_hub"><CopyableCode code="deregister_notification_hub" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-notification_hub_region"><code>notification_hub_region</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregisters a NotificationConfiguration in the specified Region. You can't deregister the last NotificationHub in the account. NotificationEvents stored in the deregistered NotificationConfiguration are no longer be visible. Recreating a new NotificationConfiguration in the same Region restores access to those NotificationEvents.</td>
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
<tr id="parameter-notification_hub_region">
    <td><CopyableCode code="notification_hub_region" /></td>
    <td><code>string</code></td>
    <td>The NotificationConfiguration Region.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to list in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token. Set to null to start listing notification hubs from the start.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_notification_hubs"
    values={[
        { label: 'list_notification_hubs', value: 'list_notification_hubs' }
    ]}
>
<TabItem value="list_notification_hubs">

Returns a list of NotificationHubs.

```sql
SELECT
creationTime,
lastActivationTime,
notificationHubRegion,
statusSummary
FROM aws.notifications.notification_hubs
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_notification_hub"
    values={[
        { label: 'register_notification_hub', value: 'register_notification_hub' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_notification_hub">

Registers a NotificationConfiguration in the specified Region. There is a maximum of one NotificationConfiguration per Region. You can have a maximum of 3 NotificationHub resources at a time.

```sql
INSERT INTO aws.notifications.notification_hubs (
notificationHubRegion,
region
)
SELECT 
'{{ notificationHubRegion }}' /* required */,
'{{ region }}'
RETURNING
creationTime,
lastActivationTime,
notificationHubRegion,
statusSummary
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: notification_hubs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the notification_hubs resource.
    - name: notificationHubRegion
      value: "{{ notificationHubRegion }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_notification_hub"
    values={[
        { label: 'deregister_notification_hub', value: 'deregister_notification_hub' }
    ]}
>
<TabItem value="deregister_notification_hub">

Deregisters a NotificationConfiguration in the specified Region. You can't deregister the last NotificationHub in the account. NotificationEvents stored in the deregistered NotificationConfiguration are no longer be visible. Recreating a new NotificationConfiguration in the same Region restores access to those NotificationEvents.

```sql
DELETE FROM aws.notifications.notification_hubs
WHERE notification_hub_region = '{{ notification_hub_region }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
