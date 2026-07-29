--- 
title: devices_for_wireless_device_import_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - devices_for_wireless_device_import_tasks
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

Creates, updates, deletes, gets or lists a <code>devices_for_wireless_device_import_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="devices_for_wireless_device_import_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.devices_for_wireless_device_import_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_devices_for_wireless_device_import_task"
    values={[
        { label: 'list_devices_for_wireless_device_import_task', value: 'list_devices_for_wireless_device_import_task' }
    ]}
>
<TabItem value="list_devices_for_wireless_device_import_task">

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
    <td><CopyableCode code="destination_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Sidewalk destination that describes the IoT rule to route messages received from devices in an import task that are onboarded to AWS IoT Wireless. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="imported_wireless_device_list" /></td>
    <td><code>array</code></td>
    <td>List of wireless devices in an import task and their onboarding status.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to get the next set of results, or null if there are no additional results.</td>
</tr>
<tr>
    <td><CopyableCode code="positioning" /></td>
    <td><code>string</code></td>
    <td>The integration status of the Device Location feature for Sidewalk devices. (Enabled, Disabled)</td>
</tr>
<tr>
    <td><CopyableCode code="sidewalk" /></td>
    <td><code>object</code></td>
    <td>The Sidewalk object containing Sidewalk-related device information.</td>
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
    <td><a href="#list_devices_for_wireless_device_import_task"><CopyableCode code="list_devices_for_wireless_device_import_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>List the Sidewalk devices in an import task and their onboarding status.</td>
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
    <td>The identifier of the import task for which wireless devices are listed.</td>
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
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the devices in the import task.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_devices_for_wireless_device_import_task"
    values={[
        { label: 'list_devices_for_wireless_device_import_task', value: 'list_devices_for_wireless_device_import_task' }
    ]}
>
<TabItem value="list_devices_for_wireless_device_import_task">

List the Sidewalk devices in an import task and their onboarding status.

```sql
SELECT
destination_name,
imported_wireless_device_list,
next_token,
positioning,
sidewalk
FROM aws.iotwireless.devices_for_wireless_device_import_tasks
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>
