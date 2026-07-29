--- 
title: input_devices
hide_title: false
hide_table_of_contents: false
keywords:
  - input_devices
  - medialive
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

Creates, updates, deletes, gets or lists an <code>input_devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="input_devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medialive.input_devices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_input_device"
    values={[
        { label: 'describe_input_device', value: 'describe_input_device' },
        { label: 'list_input_devices', value: 'list_input_devices' }
    ]}
>
<TabItem value="describe_input_device">

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
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="connection_state" /></td>
    <td><code>string</code></td>
    <td>The state of the connection between the input device and AWS. (DISCONNECTED, CONNECTED)</td>
</tr>
<tr>
    <td><CopyableCode code="device_settings_sync_state" /></td>
    <td><code>string</code></td>
    <td>The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration. (SYNCED, SYNCING)</td>
</tr>
<tr>
    <td><CopyableCode code="device_update_status" /></td>
    <td><code>string</code></td>
    <td>The status of software on the input device. (UP_TO_DATE, NOT_UP_TO_DATE, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="hd_device_settings" /></td>
    <td><code>object</code></td>
    <td>Settings that describe an input device that is type HD.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="mac_address" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="medialive_input_arns" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="network_settings" /></td>
    <td><code>object</code></td>
    <td>The network settings for the input device.</td>
</tr>
<tr>
    <td><CopyableCode code="output_type" /></td>
    <td><code>string</code></td>
    <td>The output attachment type of the input device. Specifies MEDIACONNECT_FLOW if this device is the source for a MediaConnect flow. Specifies MEDIALIVE_INPUT if this device is the source for a MediaLive input. (NONE, MEDIALIVE_INPUT, MEDIACONNECT_FLOW)</td>
</tr>
<tr>
    <td><CopyableCode code="serial_number" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A collection of key-value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the input device. (HD, UHD)</td>
</tr>
<tr>
    <td><CopyableCode code="uhd_device_settings" /></td>
    <td><code>object</code></td>
    <td>Settings that describe an input device that is type UHD.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_input_devices">

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
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="connection_state" /></td>
    <td><code>string</code></td>
    <td>The state of the connection between the input device and AWS. (DISCONNECTED, CONNECTED)</td>
</tr>
<tr>
    <td><CopyableCode code="device_settings_sync_state" /></td>
    <td><code>string</code></td>
    <td>The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration. (SYNCED, SYNCING)</td>
</tr>
<tr>
    <td><CopyableCode code="device_update_status" /></td>
    <td><code>string</code></td>
    <td>The status of software on the input device. (UP_TO_DATE, NOT_UP_TO_DATE, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="hd_device_settings" /></td>
    <td><code>object</code></td>
    <td>Settings that describe an input device that is type HD.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="mac_address" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="medialive_input_arns" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="network_settings" /></td>
    <td><code>object</code></td>
    <td>Network settings for the input device.</td>
</tr>
<tr>
    <td><CopyableCode code="output_type" /></td>
    <td><code>string</code></td>
    <td>The output attachment type of the input device. Specifies MEDIACONNECT_FLOW if this device is the source for a MediaConnect flow. Specifies MEDIALIVE_INPUT if this device is the source for a MediaLive input. (NONE, MEDIALIVE_INPUT, MEDIACONNECT_FLOW)</td>
</tr>
<tr>
    <td><CopyableCode code="serial_number" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A collection of key-value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the input device. (HD, UHD)</td>
</tr>
<tr>
    <td><CopyableCode code="uhd_device_settings" /></td>
    <td><code>object</code></td>
    <td>Settings that describe an input device that is type UHD.</td>
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
    <td><a href="#describe_input_device"><CopyableCode code="describe_input_device" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-input_device_id"><code>input_device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details for the input device</td>
</tr>
<tr>
    <td><a href="#list_input_devices"><CopyableCode code="list_input_devices" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List input devices</td>
</tr>
<tr>
    <td><a href="#update_input_device"><CopyableCode code="update_input_device" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-input_device_id"><code>input_device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the parameters for the input device.</td>
</tr>
<tr>
    <td><a href="#accept_input_device_transfer"><CopyableCode code="accept_input_device_transfer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-input_device_id"><code>input_device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Accept an incoming input device transfer. The ownership of the device will transfer to your AWS account.</td>
</tr>
<tr>
    <td><a href="#cancel_input_device_transfer"><CopyableCode code="cancel_input_device_transfer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-input_device_id"><code>input_device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancel an input device transfer that you have requested.</td>
</tr>
<tr>
    <td><a href="#reject_input_device_transfer"><CopyableCode code="reject_input_device_transfer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-input_device_id"><code>input_device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Reject the transfer of the specified input device to your AWS account.</td>
</tr>
<tr>
    <td><a href="#start_input_device_maintenance_window"><CopyableCode code="start_input_device_maintenance_window" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-input_device_id"><code>input_device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Start a maintenance window for the specified input device. Starting a maintenance window will give the device up to two hours to install software. If the device was streaming prior to the maintenance, it will resume streaming when the software is fully installed. Devices automatically install updates while they are powered on and their MediaLive channels are stopped. A maintenance window allows you to update a device without having to stop MediaLive channels that use the device. The device must remain powered on and connected to the internet for the duration of the maintenance.</td>
</tr>
<tr>
    <td><a href="#transfer_input_device"><CopyableCode code="transfer_input_device" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-input_device_id"><code>input_device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Start an input device transfer to another AWS account. After you make the request, the other account must accept or reject the transfer.</td>
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
<tr id="parameter-input_device_id">
    <td><CopyableCode code="input_device_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of this input device. For example, hd-123456789abcdef.</td>
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
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_input_device"
    values={[
        { label: 'describe_input_device', value: 'describe_input_device' },
        { label: 'list_input_devices', value: 'list_input_devices' }
    ]}
>
<TabItem value="describe_input_device">

Gets the details for the input device

```sql
SELECT
arn,
availability_zone,
connection_state,
device_settings_sync_state,
device_update_status,
hd_device_settings,
id,
mac_address,
medialive_input_arns,
name,
network_settings,
output_type,
serial_number,
tags,
type,
uhd_device_settings
FROM aws.medialive.input_devices
WHERE input_device_id = '{{ input_device_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_input_devices">

List input devices

```sql
SELECT
arn,
availability_zone,
connection_state,
device_settings_sync_state,
device_update_status,
hd_device_settings,
id,
mac_address,
medialive_input_arns,
name,
network_settings,
output_type,
serial_number,
tags,
type,
uhd_device_settings
FROM aws.medialive.input_devices
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_input_device"
    values={[
        { label: 'update_input_device', value: 'update_input_device' }
    ]}
>
<TabItem value="update_input_device">

Updates the parameters for the input device.

```sql
UPDATE aws.medialive.input_devices
SET 
HdDeviceSettings = '{{ HdDeviceSettings }}',
Name = '{{ Name }}',
UhdDeviceSettings = '{{ UhdDeviceSettings }}',
AvailabilityZone = '{{ AvailabilityZone }}'
WHERE 
input_device_id = '{{ input_device_id }}' --required
AND region = '{{ region }}' --required
RETURNING
arn,
availability_zone,
connection_state,
device_settings_sync_state,
device_update_status,
hd_device_settings,
id,
mac_address,
medialive_input_arns,
name,
network_settings,
output_type,
serial_number,
tags,
type,
uhd_device_settings;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_input_device_transfer"
    values={[
        { label: 'accept_input_device_transfer', value: 'accept_input_device_transfer' },
        { label: 'cancel_input_device_transfer', value: 'cancel_input_device_transfer' },
        { label: 'reject_input_device_transfer', value: 'reject_input_device_transfer' },
        { label: 'start_input_device_maintenance_window', value: 'start_input_device_maintenance_window' },
        { label: 'transfer_input_device', value: 'transfer_input_device' }
    ]}
>
<TabItem value="accept_input_device_transfer">

Accept an incoming input device transfer. The ownership of the device will transfer to your AWS account.

```sql
EXEC aws.medialive.input_devices.accept_input_device_transfer 
@input_device_id='{{ input_device_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="cancel_input_device_transfer">

Cancel an input device transfer that you have requested.

```sql
EXEC aws.medialive.input_devices.cancel_input_device_transfer 
@input_device_id='{{ input_device_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="reject_input_device_transfer">

Reject the transfer of the specified input device to your AWS account.

```sql
EXEC aws.medialive.input_devices.reject_input_device_transfer 
@input_device_id='{{ input_device_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="start_input_device_maintenance_window">

Start a maintenance window for the specified input device. Starting a maintenance window will give the device up to two hours to install software. If the device was streaming prior to the maintenance, it will resume streaming when the software is fully installed. Devices automatically install updates while they are powered on and their MediaLive channels are stopped. A maintenance window allows you to update a device without having to stop MediaLive channels that use the device. The device must remain powered on and connected to the internet for the duration of the maintenance.

```sql
EXEC aws.medialive.input_devices.start_input_device_maintenance_window 
@input_device_id='{{ input_device_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="transfer_input_device">

Start an input device transfer to another AWS account. After you make the request, the other account must accept or reject the transfer.

```sql
EXEC aws.medialive.input_devices.transfer_input_device 
@input_device_id='{{ input_device_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"TargetCustomerId": "{{ TargetCustomerId }}", 
"TargetRegion": "{{ TargetRegion }}", 
"TransferMessage": "{{ TransferMessage }}"
}'
;
```
</TabItem>
</Tabs>
