--- 
title: devices
hide_title: false
hide_table_of_contents: false
keywords:
  - devices
  - snow_device_management
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

Creates, updates, deletes, gets or lists a <code>devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.snow_device_management.devices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_device"
    values={[
        { label: 'describe_device', value: 'describe_device' },
        { label: 'list_devices', value: 'list_devices' }
    ]}
>
<TabItem value="describe_device">

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
    <td><CopyableCode code="associatedWithJob" /></td>
    <td><code>string</code></td>
    <td>The ID of the job used when ordering the device.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceCapacities" /></td>
    <td><code>array</code></td>
    <td>The hardware specifications of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceState" /></td>
    <td><code>string</code></td>
    <td>The current state of the device. (UNLOCKED, LOCKED, UNLOCKING)</td>
</tr>
<tr>
    <td><CopyableCode code="deviceType" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon Web Services Snow Family device.</td>
</tr>
<tr>
    <td><CopyableCode code="lastReachedOutAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the device last contacted the Amazon Web Services Cloud. Indicates that the device is online.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the device last pushed an update to the Amazon Web Services Cloud. Indicates when the device cache was refreshed.</td>
</tr>
<tr>
    <td><CopyableCode code="managedDeviceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="managedDeviceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the device that you checked the information for.</td>
</tr>
<tr>
    <td><CopyableCode code="physicalNetworkInterfaces" /></td>
    <td><code>array</code></td>
    <td>The network interfaces available on the device.</td>
</tr>
<tr>
    <td><CopyableCode code="software" /></td>
    <td><code>object</code></td>
    <td>The software installed on the device.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional metadata that you assign to a resource. You can use tags to categorize a resource in different ways, such as by purpose, owner, or environment.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_devices">

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
    <td><CopyableCode code="associatedWithJob" /></td>
    <td><code>string</code></td>
    <td>The ID of the job used to order the device.</td>
</tr>
<tr>
    <td><CopyableCode code="managedDeviceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="managedDeviceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional metadata that you assign to a resource. You can use tags to categorize a resource in different ways, such as by purpose, owner, or environment.</td>
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
    <td><a href="#describe_device"><CopyableCode code="describe_device" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-managed_device_id"><code>managed_device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Checks device-specific information, such as the device type, software version, IP addresses, and lock status.</td>
</tr>
<tr>
    <td><a href="#list_devices"><CopyableCode code="list_devices" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-jobId"><code>jobId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of all devices on your Amazon Web Services account that have Amazon Web Services Snow Device Management enabled in the Amazon Web Services Region where the command is run.</td>
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
<tr id="parameter-managed_device_id">
    <td><CopyableCode code="managed_device_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the device that you are checking the information of.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-jobId">
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td>The ID of the job used to order the device.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of devices to list per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token to continue to the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_device"
    values={[
        { label: 'describe_device', value: 'describe_device' },
        { label: 'list_devices', value: 'list_devices' }
    ]}
>
<TabItem value="describe_device">

Checks device-specific information, such as the device type, software version, IP addresses, and lock status.

```sql
SELECT
associatedWithJob,
deviceCapacities,
deviceState,
deviceType,
lastReachedOutAt,
lastUpdatedAt,
managedDeviceArn,
managedDeviceId,
physicalNetworkInterfaces,
software,
tags
FROM aws.snow_device_management.devices
WHERE managed_device_id = '{{ managed_device_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_devices">

Returns a list of all devices on your Amazon Web Services account that have Amazon Web Services Snow Device Management enabled in the Amazon Web Services Region where the command is run.

```sql
SELECT
associatedWithJob,
managedDeviceArn,
managedDeviceId,
tags
FROM aws.snow_device_management.devices
WHERE region = '{{ region }}' -- required
AND jobId = '{{ jobId }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
