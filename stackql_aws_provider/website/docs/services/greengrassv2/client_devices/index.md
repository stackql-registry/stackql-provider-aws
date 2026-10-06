--- 
title: client_devices
hide_title: false
hide_table_of_contents: false
keywords:
  - client_devices
  - greengrassv2
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

Creates, updates, deletes, gets or lists a <code>client_devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="client_devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrassv2.client_devices" /></td></tr>
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
    <td><a href="#batch_associate_client_device_with_core_device"><CopyableCode code="batch_associate_client_device_with_core_device" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-core_device_thing_name"><code>core_device_thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates a list of client devices with a core device. Use this API operation to specify which client devices can discover a core device through cloud discovery. With cloud discovery, client devices connect to IoT Greengrass to retrieve associated core devices' connectivity information and certificates. For more information, see Configure cloud discovery in the IoT Greengrass V2 Developer Guide. Client devices are local IoT devices that connect to and communicate with an IoT Greengrass core device over MQTT. You can connect client devices to a core device to sync MQTT messages and data to Amazon Web Services IoT Core and interact with client devices in Greengrass components. For more information, see Interact with local IoT devices in the IoT Greengrass V2 Developer Guide.</td>
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
<tr id="parameter-core_device_thing_name">
    <td><CopyableCode code="core_device_thing_name" /></td>
    <td><code>string</code></td>
    <td>The name of the core device. This is also the name of the IoT thing.</td>
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
    defaultValue="batch_associate_client_device_with_core_device"
    values={[
        { label: 'batch_associate_client_device_with_core_device', value: 'batch_associate_client_device_with_core_device' }
    ]}
>
<TabItem value="batch_associate_client_device_with_core_device">

Associates a list of client devices with a core device. Use this API operation to specify which client devices can discover a core device through cloud discovery. With cloud discovery, client devices connect to IoT Greengrass to retrieve associated core devices' connectivity information and certificates. For more information, see Configure cloud discovery in the IoT Greengrass V2 Developer Guide. Client devices are local IoT devices that connect to and communicate with an IoT Greengrass core device over MQTT. You can connect client devices to a core device to sync MQTT messages and data to Amazon Web Services IoT Core and interact with client devices in Greengrass components. For more information, see Interact with local IoT devices in the IoT Greengrass V2 Developer Guide.

```sql
EXEC aws.greengrassv2.client_devices.batch_associate_client_device_with_core_device 
@core_device_thing_name='{{ core_device_thing_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"entries": "{{ entries }}"
}'
;
```
</TabItem>
</Tabs>
