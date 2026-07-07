--- 
title: autoshift_observer_notification_status
hide_title: false
hide_table_of_contents: false
keywords:
  - autoshift_observer_notification_status
  - arc_zonal_shift
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

Creates, updates, deletes, gets or lists an <code>autoshift_observer_notification_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autoshift_observer_notification_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.arc_zonal_shift.autoshift_observer_notification_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_autoshift_observer_notification_status"
    values={[
        { label: 'get_autoshift_observer_notification_status', value: 'get_autoshift_observer_notification_status' }
    ]}
>
<TabItem value="get_autoshift_observer_notification_status">

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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of autoshift observer notification. If the status is ENABLED, ARC includes all autoshift events when you use the Amazon EventBridge pattern Autoshift In Progress. When the status is DISABLED, ARC includes only autoshift events for autoshifts when one or more of your resources is included in the autoshift. (ENABLED, DISABLED)</td>
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
    <td><a href="#get_autoshift_observer_notification_status"><CopyableCode code="get_autoshift_observer_notification_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the status of the autoshift observer notification. Autoshift observer notifications notify you through Amazon EventBridge when there is an autoshift event for zonal autoshift. The status can be ENABLED or DISABLED. When ENABLED, a notification is sent when an autoshift is triggered. When DISABLED, notifications are not sent.</td>
</tr>
<tr>
    <td><a href="#update_autoshift_observer_notification_status"><CopyableCode code="update_autoshift_observer_notification_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Update the status of autoshift observer notification. Autoshift observer notification enables you to be notified, through Amazon EventBridge, when there is an autoshift event for zonal autoshift. If the status is ENABLED, ARC includes all autoshift events when you use the EventBridge pattern Autoshift In Progress. When the status is DISABLED, ARC includes only autoshift events for autoshifts when one or more of your resources is included in the autoshift. For more information, see Notifications for practice runs and autoshifts in the Amazon Application Recovery Controller Developer Guide.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_autoshift_observer_notification_status"
    values={[
        { label: 'get_autoshift_observer_notification_status', value: 'get_autoshift_observer_notification_status' }
    ]}
>
<TabItem value="get_autoshift_observer_notification_status">

Returns the status of the autoshift observer notification. Autoshift observer notifications notify you through Amazon EventBridge when there is an autoshift event for zonal autoshift. The status can be ENABLED or DISABLED. When ENABLED, a notification is sent when an autoshift is triggered. When DISABLED, notifications are not sent.

```sql
SELECT
status
FROM aws.arc_zonal_shift.autoshift_observer_notification_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_autoshift_observer_notification_status"
    values={[
        { label: 'update_autoshift_observer_notification_status', value: 'update_autoshift_observer_notification_status' }
    ]}
>
<TabItem value="update_autoshift_observer_notification_status">

Update the status of autoshift observer notification. Autoshift observer notification enables you to be notified, through Amazon EventBridge, when there is an autoshift event for zonal autoshift. If the status is ENABLED, ARC includes all autoshift events when you use the EventBridge pattern Autoshift In Progress. When the status is DISABLED, ARC includes only autoshift events for autoshifts when one or more of your resources is included in the autoshift. For more information, see Notifications for practice runs and autoshifts in the Amazon Application Recovery Controller Developer Guide.

```sql
UPDATE aws.arc_zonal_shift.autoshift_observer_notification_status
SET 
status = '{{ status }}'
WHERE 
region = '{{ region }}' --required
AND status = '{{ status }}' --required
RETURNING
status;
```
</TabItem>
</Tabs>
