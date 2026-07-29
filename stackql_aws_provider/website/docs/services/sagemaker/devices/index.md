--- 
title: devices
hide_title: false
hide_table_of_contents: false
keywords:
  - devices
  - sagemaker
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.devices" /></td></tr>
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
    <td><CopyableCode code="agent_version" /></td>
    <td><code>string</code></td>
    <td>Edge Manager agent version. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\ \_\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the device. (pattern: &lt;code&gt;&#91;-a-zA-Z0-9_.,;:! &#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="device_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the device. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:&#91;a-z\-&#93;*:&#91;a-z\-&#93;*:\d&#123;12&#125;:&#91;a-z\-&#93;*/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="device_fleet_name" /></td>
    <td><code>string</code></td>
    <td>The name of the fleet the device belongs to. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="device_name" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the device. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="iot_thing_name" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Internet of Things (IoT) object thing name associated with the device. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="latest_heartbeat" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last heartbeat received from the device.</td>
</tr>
<tr>
    <td><CopyableCode code="max_models" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of models.</td>
</tr>
<tr>
    <td><CopyableCode code="models" /></td>
    <td><code>array</code></td>
    <td>Models on the device.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The response from the last list when returning a list large enough to need tokening. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registration_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last registration or de-reregistration.</td>
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
    <td><CopyableCode code="agent_version" /></td>
    <td><code>string</code></td>
    <td>Edge Manager agent version. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\ \_\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the device. (pattern: &lt;code&gt;&#91;-a-zA-Z0-9_.,;:! &#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="device_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the device. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:&#91;a-z\-&#93;*:&#91;a-z\-&#93;*:\d&#123;12&#125;:&#91;a-z\-&#93;*/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="device_fleet_name" /></td>
    <td><code>string</code></td>
    <td>The name of the fleet the device belongs to. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="device_name" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the device. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="iot_thing_name" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Internet of Things (IoT) object thing name associated with the device.. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="latest_heartbeat" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last heartbeat received from the device.</td>
</tr>
<tr>
    <td><CopyableCode code="models" /></td>
    <td><code>array</code></td>
    <td>Models on the device.</td>
</tr>
<tr>
    <td><CopyableCode code="registration_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last registration or de-reregistration.</td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the device.</td>
</tr>
<tr>
    <td><a href="#list_devices"><CopyableCode code="list_devices" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>A list of devices.</td>
</tr>
<tr>
    <td><a href="#register_devices"><CopyableCode code="register_devices" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeviceFleetName"><code>DeviceFleetName</code></a>, <a href="#parameter-Devices"><code>Devices</code></a></td>
    <td></td>
    <td>Register devices.</td>
</tr>
<tr>
    <td><a href="#update_devices"><CopyableCode code="update_devices" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeviceFleetName"><code>DeviceFleetName</code></a>, <a href="#parameter-Devices"><code>Devices</code></a></td>
    <td></td>
    <td>Updates one or more devices in a fleet.</td>
</tr>
<tr>
    <td><a href="#deregister_devices"><CopyableCode code="deregister_devices" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregisters the specified devices. After you deregister a device, you will need to re-register the devices.</td>
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
    defaultValue="describe_device"
    values={[
        { label: 'describe_device', value: 'describe_device' },
        { label: 'list_devices', value: 'list_devices' }
    ]}
>
<TabItem value="describe_device">

Describes the device.

```sql
SELECT
agent_version,
description,
device_arn,
device_fleet_name,
device_name,
iot_thing_name,
latest_heartbeat,
max_models,
models,
next_token,
registration_time
FROM aws.sagemaker.devices
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_devices">

A list of devices.

```sql
SELECT
agent_version,
description,
device_arn,
device_fleet_name,
device_name,
iot_thing_name,
latest_heartbeat,
models,
registration_time
FROM aws.sagemaker.devices
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_devices"
    values={[
        { label: 'register_devices', value: 'register_devices' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_devices">

Register devices.

```sql
INSERT INTO aws.sagemaker.devices (
DeviceFleetName,
Devices,
Tags,
region
)
SELECT 
'{{ DeviceFleetName }}' /* required */,
'{{ Devices }}' /* required */,
'{{ Tags }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: devices
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the devices resource.
    - name: DeviceFleetName
      value: "{{ DeviceFleetName }}"
      description: |
        The name of the fleet.
    - name: Devices
      description: |
        A list of devices to register with SageMaker Edge Manager.
      value:
        - DeviceName: "{{ DeviceName }}"
          Description: "{{ Description }}"
          IotThingName: "{{ IotThingName }}"
    - name: Tags
      description: |
        The tags associated with devices.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_devices"
    values={[
        { label: 'update_devices', value: 'update_devices' }
    ]}
>
<TabItem value="update_devices">

Updates one or more devices in a fleet.

```sql
UPDATE aws.sagemaker.devices
SET 
DeviceFleetName = '{{ DeviceFleetName }}',
Devices = '{{ Devices }}'
WHERE 
region = '{{ region }}' --required
AND DeviceFleetName = '{{ DeviceFleetName }}' --required
AND Devices = '{{ Devices }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_devices"
    values={[
        { label: 'deregister_devices', value: 'deregister_devices' }
    ]}
>
<TabItem value="deregister_devices">

Deregisters the specified devices. After you deregister a device, you will need to re-register the devices.

```sql
DELETE FROM aws.sagemaker.devices
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
