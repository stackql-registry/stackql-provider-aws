--- 
title: vtl_devices
hide_title: false
hide_table_of_contents: false
keywords:
  - vtl_devices
  - storagegateway
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

Creates, updates, deletes, gets or lists a <code>vtl_devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vtl_devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.vtl_devices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vtl_devices"
    values={[
        { label: 'describe_vtl_devices', value: 'describe_vtl_devices' }
    ]}
>
<TabItem value="describe_vtl_devices">

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
    <td><CopyableCode code="DeviceiSCSIAttributes" /></td>
    <td><code>object</code></td>
    <td>A list of iSCSI information about a VTL device.</td>
</tr>
<tr>
    <td><CopyableCode code="VTLDeviceARN" /></td>
    <td><code>string</code></td>
    <td>Specifies the unique Amazon Resource Name (ARN) of the device (tape drive or media changer).</td>
</tr>
<tr>
    <td><CopyableCode code="VTLDeviceProductIdentifier" /></td>
    <td><code>string</code></td>
    <td>Specifies the model number of device that the VTL device emulates.</td>
</tr>
<tr>
    <td><CopyableCode code="VTLDeviceType" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of device that the VTL device emulates.</td>
</tr>
<tr>
    <td><CopyableCode code="VTLDeviceVendor" /></td>
    <td><code>string</code></td>
    <td>Specifies the vendor of the device that the VTL device object emulates.</td>
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
    <td><a href="#describe_vtl_devices"><CopyableCode code="describe_vtl_devices" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of virtual tape library (VTL) devices for the specified tape gateway. In the response, Storage Gateway returns VTL device information. This operation is only supported in the tape gateway type.</td>
</tr>
<tr>
    <td><a href="#update_vtl_device_type"><CopyableCode code="update_vtl_device_type" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VTLDeviceARN"><code>VTLDeviceARN</code></a>, <a href="#parameter-DeviceType"><code>DeviceType</code></a></td>
    <td></td>
    <td>Updates the type of medium changer in a tape gateway. When you activate a tape gateway, you select a medium changer type for the tape gateway. This operation enables you to select a different type of medium changer after a tape gateway is activated. This operation is only supported in the tape gateway type.</td>
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
    defaultValue="describe_vtl_devices"
    values={[
        { label: 'describe_vtl_devices', value: 'describe_vtl_devices' }
    ]}
>
<TabItem value="describe_vtl_devices">

Returns a description of virtual tape library (VTL) devices for the specified tape gateway. In the response, Storage Gateway returns VTL device information. This operation is only supported in the tape gateway type.

```sql
SELECT
DeviceiSCSIAttributes,
VTLDeviceARN,
VTLDeviceProductIdentifier,
VTLDeviceType,
VTLDeviceVendor
FROM aws.storagegateway.vtl_devices
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_vtl_device_type"
    values={[
        { label: 'update_vtl_device_type', value: 'update_vtl_device_type' }
    ]}
>
<TabItem value="update_vtl_device_type">

Updates the type of medium changer in a tape gateway. When you activate a tape gateway, you select a medium changer type for the tape gateway. This operation enables you to select a different type of medium changer after a tape gateway is activated. This operation is only supported in the tape gateway type.

```sql
UPDATE aws.storagegateway.vtl_devices
SET 
VTLDeviceARN = '{{ VTLDeviceARN }}',
DeviceType = '{{ DeviceType }}'
WHERE 
region = '{{ region }}' --required
AND VTLDeviceARN = '{{ VTLDeviceARN }}' --required
AND DeviceType = '{{ DeviceType }}' --required
RETURNING
VTLDeviceARN;
```
</TabItem>
</Tabs>
