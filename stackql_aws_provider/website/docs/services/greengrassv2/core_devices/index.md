--- 
title: core_devices
hide_title: false
hide_table_of_contents: false
keywords:
  - core_devices
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

Creates, updates, deletes, gets or lists a <code>core_devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="core_devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrassv2.core_devices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_core_device"
    values={[
        { label: 'get_core_device', value: 'get_core_device' },
        { label: 'list_core_devices', value: 'list_core_devices' }
    ]}
>
<TabItem value="get_core_device">

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
    <td><CopyableCode code="architecture" /></td>
    <td><code>string</code></td>
    <td>The computer architecture of the core device.</td>
</tr>
<tr>
    <td><CopyableCode code="core_device_thing_name" /></td>
    <td><code>string</code></td>
    <td>The name of the core device. This is also the name of the IoT thing.</td>
</tr>
<tr>
    <td><CopyableCode code="core_version" /></td>
    <td><code>string</code></td>
    <td>The version of the IoT Greengrass Core software that the core device runs. This version is equivalent to the version of the Greengrass nucleus component that runs on the core device. For more information, see the Greengrass nucleus component in the IoT Greengrass V2 Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="last_status_update_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the core device's status last updated, expressed in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The operating system platform that the core device runs.</td>
</tr>
<tr>
    <td><CopyableCode code="runtime" /></td>
    <td><code>string</code></td>
    <td>The runtime for the core device. The runtime can be: aws_nucleus_classic aws_nucleus_lite</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the core device. The core device status can be: HEALTHY – The IoT Greengrass Core software and all components run on the core device without issue. UNHEALTHY – The IoT Greengrass Core software or a component is in a failed state on the core device. (HEALTHY, UNHEALTHY)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A list of key-value pairs that contain metadata for the resource. For more information, see Tag your resources in the IoT Greengrass V2 Developer Guide.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_core_devices">

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
    <td><CopyableCode code="architecture" /></td>
    <td><code>string</code></td>
    <td>The computer architecture of the core device.</td>
</tr>
<tr>
    <td><CopyableCode code="core_device_thing_name" /></td>
    <td><code>string</code></td>
    <td>The name of the core device. This is also the name of the IoT thing.</td>
</tr>
<tr>
    <td><CopyableCode code="last_status_update_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the core device's status last updated, expressed in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The operating system platform that the core device runs.</td>
</tr>
<tr>
    <td><CopyableCode code="runtime" /></td>
    <td><code>string</code></td>
    <td>The runtime for the core device. The runtime can be: aws_nucleus_classic aws_nucleus_lite</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the core device. Core devices can have the following statuses: HEALTHY – The IoT Greengrass Core software and all components run on the core device without issue. UNHEALTHY – The IoT Greengrass Core software or a component is in a failed state on the core device. (HEALTHY, UNHEALTHY)</td>
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
    <td><a href="#get_core_device"><CopyableCode code="get_core_device" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-core_device_thing_name"><code>core_device_thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves metadata for a Greengrass core device. IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated. Core devices send status updates at the following times: When the IoT Greengrass Core software starts When the core device receives a deployment from the Amazon Web Services Cloud When the status of any component on the core device becomes BROKEN At a regular interval that you can configure, which defaults to 24 hours For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</td>
</tr>
<tr>
    <td><a href="#list_core_devices"><CopyableCode code="list_core_devices" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-thingGroupArn"><code>thingGroupArn</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-runtime"><code>runtime</code></a></td>
    <td>Retrieves a paginated list of Greengrass core devices. IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated. Core devices send status updates at the following times: When the IoT Greengrass Core software starts When the core device receives a deployment from the Amazon Web Services Cloud For Greengrass nucleus 2.12.2 and earlier, the core device sends status updates when the status of any component on the core device becomes ERRORED or BROKEN. For Greengrass nucleus 2.12.3 and later, the core device sends status updates when the status of any component on the core device becomes ERRORED, BROKEN, RUNNING, or FINISHED. At a regular interval that you can configure, which defaults to 24 hours For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</td>
</tr>
<tr>
    <td><a href="#delete_core_device"><CopyableCode code="delete_core_device" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-core_device_thing_name"><code>core_device_thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Greengrass core device, which is an IoT thing. This operation removes the core device from the list of core devices. This operation doesn't delete the IoT thing. For more information about how to delete the IoT thing, see DeleteThing in the IoT API Reference.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per paginated request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
<tr id="parameter-runtime">
    <td><CopyableCode code="runtime" /></td>
    <td><code>string</code></td>
    <td>The runtime to be used by the core device. The runtime can be: aws_nucleus_classic aws_nucleus_lite</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The core device status by which to filter. If you specify this parameter, the list includes only core devices that have this status. Choose one of the following options: HEALTHY – The IoT Greengrass Core software and all components run on the core device without issue. UNHEALTHY – The IoT Greengrass Core software or a component is in a failed state on the core device.</td>
</tr>
<tr id="parameter-thingGroupArn">
    <td><CopyableCode code="thingGroupArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IoT thing group by which to filter. If you specify this parameter, the list includes only core devices that have successfully deployed a deployment that targets the thing group. When you remove a core device from a thing group, the list continues to include that core device.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_core_device"
    values={[
        { label: 'get_core_device', value: 'get_core_device' },
        { label: 'list_core_devices', value: 'list_core_devices' }
    ]}
>
<TabItem value="get_core_device">

Retrieves metadata for a Greengrass core device. IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated. Core devices send status updates at the following times: When the IoT Greengrass Core software starts When the core device receives a deployment from the Amazon Web Services Cloud When the status of any component on the core device becomes BROKEN At a regular interval that you can configure, which defaults to 24 hours For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment

```sql
SELECT
architecture,
core_device_thing_name,
core_version,
last_status_update_timestamp,
platform,
runtime,
status,
tags
FROM aws.greengrassv2.core_devices
WHERE core_device_thing_name = '{{ core_device_thing_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_core_devices">

Retrieves a paginated list of Greengrass core devices. IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated. Core devices send status updates at the following times: When the IoT Greengrass Core software starts When the core device receives a deployment from the Amazon Web Services Cloud For Greengrass nucleus 2.12.2 and earlier, the core device sends status updates when the status of any component on the core device becomes ERRORED or BROKEN. For Greengrass nucleus 2.12.3 and later, the core device sends status updates when the status of any component on the core device becomes ERRORED, BROKEN, RUNNING, or FINISHED. At a regular interval that you can configure, which defaults to 24 hours For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment

```sql
SELECT
architecture,
core_device_thing_name,
last_status_update_timestamp,
platform,
runtime,
status
FROM aws.greengrassv2.core_devices
WHERE region = '{{ region }}' -- required
AND thingGroupArn = '{{ thingGroupArn }}'
AND status = '{{ status }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND runtime = '{{ runtime }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_core_device"
    values={[
        { label: 'delete_core_device', value: 'delete_core_device' }
    ]}
>
<TabItem value="delete_core_device">

Deletes a Greengrass core device, which is an IoT thing. This operation removes the core device from the list of core devices. This operation doesn't delete the IoT thing. For more information about how to delete the IoT thing, see DeleteThing in the IoT API Reference.

```sql
DELETE FROM aws.greengrassv2.core_devices
WHERE core_device_thing_name = '{{ core_device_thing_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
