--- 
title: devices
hide_title: false
hide_table_of_contents: false
keywords:
  - devices
  - devicefarm
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devicefarm.devices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_device"
    values={[
        { label: 'get_device', value: 'get_device' },
        { label: 'list_devices', value: 'list_devices' }
    ]}
>
<TabItem value="get_device">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The device's display name.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The device's ARN. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="availability" /></td>
    <td><code>string</code></td>
    <td>Indicates how likely a device is available for a test run. Currently available in the ListDevices and GetDevice API methods. (TEMPORARY_NOT_AVAILABLE, BUSY, AVAILABLE, HIGHLY_AVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="carrier" /></td>
    <td><code>string</code></td>
    <td>The device's carrier.</td>
</tr>
<tr>
    <td><CopyableCode code="cpu" /></td>
    <td><code>object</code></td>
    <td>Information about the device's CPU.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_name" /></td>
    <td><code>string</code></td>
    <td>The name of the fleet to which this device belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_type" /></td>
    <td><code>string</code></td>
    <td>The type of fleet to which this device belongs. Possible values are PRIVATE and PUBLIC.</td>
</tr>
<tr>
    <td><CopyableCode code="form_factor" /></td>
    <td><code>string</code></td>
    <td>The device's form factor. Allowed values include: PHONE TABLET (PHONE, TABLET)</td>
</tr>
<tr>
    <td><CopyableCode code="heap_size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The device's heap size, expressed in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>string</code></td>
    <td>The device's image name.</td>
</tr>
<tr>
    <td><CopyableCode code="instances" /></td>
    <td><code>array</code></td>
    <td>The instances that belong to this device.</td>
</tr>
<tr>
    <td><CopyableCode code="manufacturer" /></td>
    <td><code>string</code></td>
    <td>The device's manufacturer name.</td>
</tr>
<tr>
    <td><CopyableCode code="memory" /></td>
    <td><code>integer (int64)</code></td>
    <td>The device's total memory size, expressed in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>The device's model name.</td>
</tr>
<tr>
    <td><CopyableCode code="model_id" /></td>
    <td><code>string</code></td>
    <td>The device's model ID.</td>
</tr>
<tr>
    <td><CopyableCode code="os" /></td>
    <td><code>string</code></td>
    <td>The device's operating system type.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The device's platform. Allowed values include: ANDROID IOS (ANDROID, IOS)</td>
</tr>
<tr>
    <td><CopyableCode code="radio" /></td>
    <td><code>string</code></td>
    <td>The device's radio.</td>
</tr>
<tr>
    <td><CopyableCode code="remote_access_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether remote access has been enabled for the specified device.</td>
</tr>
<tr>
    <td><CopyableCode code="remote_debug_enabled" /></td>
    <td><code>boolean</code></td>
    <td>This flag is set to true if remote debugging is enabled for the device. Remote debugging is no longer supported.</td>
</tr>
<tr>
    <td><CopyableCode code="resolution" /></td>
    <td><code>object</code></td>
    <td>The resolution of the device.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The device's display name.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The device's ARN. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="availability" /></td>
    <td><code>string</code></td>
    <td>Indicates how likely a device is available for a test run. Currently available in the ListDevices and GetDevice API methods. (TEMPORARY_NOT_AVAILABLE, BUSY, AVAILABLE, HIGHLY_AVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="carrier" /></td>
    <td><code>string</code></td>
    <td>The device's carrier.</td>
</tr>
<tr>
    <td><CopyableCode code="cpu" /></td>
    <td><code>object</code></td>
    <td>Information about the device's CPU.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_name" /></td>
    <td><code>string</code></td>
    <td>The name of the fleet to which this device belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_type" /></td>
    <td><code>string</code></td>
    <td>The type of fleet to which this device belongs. Possible values are PRIVATE and PUBLIC.</td>
</tr>
<tr>
    <td><CopyableCode code="form_factor" /></td>
    <td><code>string</code></td>
    <td>The device's form factor. Allowed values include: PHONE TABLET (PHONE, TABLET)</td>
</tr>
<tr>
    <td><CopyableCode code="heap_size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The device's heap size, expressed in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>string</code></td>
    <td>The device's image name.</td>
</tr>
<tr>
    <td><CopyableCode code="instances" /></td>
    <td><code>array</code></td>
    <td>The instances that belong to this device.</td>
</tr>
<tr>
    <td><CopyableCode code="manufacturer" /></td>
    <td><code>string</code></td>
    <td>The device's manufacturer name.</td>
</tr>
<tr>
    <td><CopyableCode code="memory" /></td>
    <td><code>integer (int64)</code></td>
    <td>The device's total memory size, expressed in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>The device's model name.</td>
</tr>
<tr>
    <td><CopyableCode code="model_id" /></td>
    <td><code>string</code></td>
    <td>The device's model ID.</td>
</tr>
<tr>
    <td><CopyableCode code="os" /></td>
    <td><code>string</code></td>
    <td>The device's operating system type.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The device's platform. Allowed values include: ANDROID IOS (ANDROID, IOS)</td>
</tr>
<tr>
    <td><CopyableCode code="radio" /></td>
    <td><code>string</code></td>
    <td>The device's radio.</td>
</tr>
<tr>
    <td><CopyableCode code="remote_access_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether remote access has been enabled for the specified device.</td>
</tr>
<tr>
    <td><CopyableCode code="remote_debug_enabled" /></td>
    <td><code>boolean</code></td>
    <td>This flag is set to true if remote debugging is enabled for the device. Remote debugging is no longer supported.</td>
</tr>
<tr>
    <td><CopyableCode code="resolution" /></td>
    <td><code>object</code></td>
    <td>The resolution of the device.</td>
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
    <td><a href="#get_device"><CopyableCode code="get_device" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a unique device type.</td>
</tr>
<tr>
    <td><a href="#list_devices"><CopyableCode code="list_devices" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about unique device types.</td>
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
    defaultValue="get_device"
    values={[
        { label: 'get_device', value: 'get_device' },
        { label: 'list_devices', value: 'list_devices' }
    ]}
>
<TabItem value="get_device">

Gets information about a unique device type.

```sql
SELECT
name,
arn,
availability,
carrier,
cpu,
fleet_name,
fleet_type,
form_factor,
heap_size,
image,
instances,
manufacturer,
memory,
model,
model_id,
os,
platform,
radio,
remote_access_enabled,
remote_debug_enabled,
resolution
FROM aws.devicefarm.devices
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_devices">

Gets information about unique device types.

```sql
SELECT
name,
arn,
availability,
carrier,
cpu,
fleet_name,
fleet_type,
form_factor,
heap_size,
image,
instances,
manufacturer,
memory,
model,
model_id,
os,
platform,
radio,
remote_access_enabled,
remote_debug_enabled,
resolution
FROM aws.devicefarm.devices
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
