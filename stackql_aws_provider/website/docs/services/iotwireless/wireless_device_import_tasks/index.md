--- 
title: wireless_device_import_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - wireless_device_import_tasks
  - iotwireless
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

Creates, updates, deletes, gets or lists a <code>wireless_device_import_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="wireless_device_import_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.wireless_device_import_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_wireless_device_import_task"
    values={[
        { label: 'get_wireless_device_import_task', value: 'get_wireless_device_import_task' },
        { label: 'list_wireless_device_import_tasks', value: 'list_wireless_device_import_tasks' }
    ]}
>
<TabItem value="get_wireless_device_import_task">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the import task.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the import task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationName" /></td>
    <td><code>string</code></td>
    <td>The name of the destination that's assigned to the wireless devices in the import task. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FailedImportedDeviceCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of devices in the import task that failed to onboard to the import task.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the import task for which information is retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="InitializedImportedDeviceCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of devices in the import task that are waiting for the control log to start processing.</td>
</tr>
<tr>
    <td><CopyableCode code="OnboardedImportedDeviceCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of devices in the import task that have been onboarded to the import task.</td>
</tr>
<tr>
    <td><CopyableCode code="PendingImportedDeviceCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of devices in the import task that are waiting in the import task queue to be onboarded.</td>
</tr>
<tr>
    <td><CopyableCode code="Positioning" /></td>
    <td><code>string</code></td>
    <td>The integration status of the Device Location feature for LoRaWAN and Sidewalk devices. (Enabled, Disabled)</td>
</tr>
<tr>
    <td><CopyableCode code="Sidewalk" /></td>
    <td><code>object</code></td>
    <td>The Sidewalk-related information about an import task.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The import task status. (INITIALIZING, INITIALIZED, PENDING, COMPLETE, FAILED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the provided status information, such as a validation error that causes the import task to fail.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_wireless_device_import_tasks">

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
    <td>The token to use to get the next set of results, or null if there are no additional results.</td>
</tr>
<tr>
    <td><CopyableCode code="WirelessDeviceImportTaskList" /></td>
    <td><code>array</code></td>
    <td>List of import tasks and summary information of onboarding status of devices in each import task.</td>
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
    <td><a href="#get_wireless_device_import_task"><CopyableCode code="get_wireless_device_import_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get information about an import task and count of device onboarding summary information for the import task.</td>
</tr>
<tr>
    <td><a href="#list_wireless_device_import_tasks"><CopyableCode code="list_wireless_device_import_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List of import tasks and summary information of onboarding status of devices in each import task.</td>
</tr>
<tr>
    <td><a href="#update_wireless_device_import_task"><CopyableCode code="update_wireless_device_import_task" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update an import task to add more devices to the task.</td>
</tr>
<tr>
    <td><a href="#delete_wireless_device_import_task"><CopyableCode code="delete_wireless_device_import_task" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an import task.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the import task to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_wireless_device_import_task"
    values={[
        { label: 'get_wireless_device_import_task', value: 'get_wireless_device_import_task' },
        { label: 'list_wireless_device_import_tasks', value: 'list_wireless_device_import_tasks' }
    ]}
>
<TabItem value="get_wireless_device_import_task">

Get information about an import task and count of device onboarding summary information for the import task.

```sql
SELECT
Arn,
CreationTime,
DestinationName,
FailedImportedDeviceCount,
Id,
InitializedImportedDeviceCount,
OnboardedImportedDeviceCount,
PendingImportedDeviceCount,
Positioning,
Sidewalk,
Status,
StatusReason
FROM aws.iotwireless.wireless_device_import_tasks
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_wireless_device_import_tasks">

List of import tasks and summary information of onboarding status of devices in each import task.

```sql
SELECT
NextToken,
WirelessDeviceImportTaskList
FROM aws.iotwireless.wireless_device_import_tasks
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_wireless_device_import_task"
    values={[
        { label: 'update_wireless_device_import_task', value: 'update_wireless_device_import_task' }
    ]}
>
<TabItem value="update_wireless_device_import_task">

Update an import task to add more devices to the task.

```sql
UPDATE aws.iotwireless.wireless_device_import_tasks
SET 
Sidewalk = '{{ Sidewalk }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_wireless_device_import_task"
    values={[
        { label: 'delete_wireless_device_import_task', value: 'delete_wireless_device_import_task' }
    ]}
>
<TabItem value="delete_wireless_device_import_task">

Delete an import task.

```sql
DELETE FROM aws.iotwireless.wireless_device_import_tasks
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
