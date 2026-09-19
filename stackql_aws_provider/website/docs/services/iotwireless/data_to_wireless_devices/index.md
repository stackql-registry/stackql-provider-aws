--- 
title: data_to_wireless_devices
hide_title: false
hide_table_of_contents: false
keywords:
  - data_to_wireless_devices
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

Creates, updates, deletes, gets or lists a <code>data_to_wireless_devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_to_wireless_devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.data_to_wireless_devices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#send_data_to_wireless_device"><CopyableCode code="send_data_to_wireless_device" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TransmitMode"><code>TransmitMode</code></a>, <a href="#parameter-PayloadData"><code>PayloadData</code></a></td>
    <td></td>
    <td>Sends a decrypted application data frame to a device.</td>
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
    <td>The ID of the wireless device to receive the data.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="send_data_to_wireless_device"
    values={[
        { label: 'send_data_to_wireless_device', value: 'send_data_to_wireless_device' }
    ]}
>
<TabItem value="send_data_to_wireless_device">

Sends a decrypted application data frame to a device.

```sql
EXEC aws.iotwireless.data_to_wireless_devices.send_data_to_wireless_device 
@id='{{ id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"TransmitMode": {{ TransmitMode }}, 
"PayloadData": "{{ PayloadData }}", 
"WirelessMetadata": "{{ WirelessMetadata }}"
}'
;
```
</TabItem>
</Tabs>
