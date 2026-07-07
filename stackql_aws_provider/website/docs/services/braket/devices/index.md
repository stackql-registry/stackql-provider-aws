--- 
title: devices
hide_title: false
hide_table_of_contents: false
keywords:
  - devices
  - braket
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.braket.devices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_device"
    values={[
        { label: 'get_device', value: 'get_device' },
        { label: 'search_devices', value: 'search_devices' }
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
    <td><CopyableCode code="deviceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceCapabilities" /></td>
    <td><code>string</code></td>
    <td>Details about the capabilities of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceName" /></td>
    <td><code>string</code></td>
    <td>The name of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceQueueInfo" /></td>
    <td><code>array</code></td>
    <td>The number of quantum tasks and hybrid jobs currently queued on the device.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the device. (ONLINE, OFFLINE, RETIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="deviceType" /></td>
    <td><code>string</code></td>
    <td>The type of the device. (QPU, SIMULATOR)</td>
</tr>
<tr>
    <td><CopyableCode code="providerName" /></td>
    <td><code>string</code></td>
    <td>The name of the partner company for the device.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_devices">

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
    <td><CopyableCode code="deviceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceName" /></td>
    <td><code>string</code></td>
    <td>The name of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the device. (ONLINE, OFFLINE, RETIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="deviceType" /></td>
    <td><code>string</code></td>
    <td>The type of the device. (QPU, SIMULATOR)</td>
</tr>
<tr>
    <td><CopyableCode code="providerName" /></td>
    <td><code>string</code></td>
    <td>The provider of the device.</td>
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
    <td><a href="#parameter-device_arn"><code>device_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the devices available in Amazon Braket. For backwards compatibility with older versions of BraketSchemas, OpenQASM information is omitted from GetDevice API calls. To get this information the user-agent needs to present a recent version of the BraketSchemas (1.8.0 or later). The Braket SDK automatically reports this for you. If you do not see OpenQASM results in the GetDevice response when using a Braket SDK, you may need to set AWS_EXECUTION_ENV environment variable to configure user-agent. See the code examples provided below for how to do this for the AWS CLI, Boto3, and the Go, Java, and JavaScript/TypeScript SDKs.</td>
</tr>
<tr>
    <td><a href="#search_devices"><CopyableCode code="search_devices" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for devices using the specified filters.</td>
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
<tr id="parameter-device_arn">
    <td><CopyableCode code="device_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the device to retrieve.</td>
</tr>
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
        { label: 'search_devices', value: 'search_devices' }
    ]}
>
<TabItem value="get_device">

Retrieves the devices available in Amazon Braket. For backwards compatibility with older versions of BraketSchemas, OpenQASM information is omitted from GetDevice API calls. To get this information the user-agent needs to present a recent version of the BraketSchemas (1.8.0 or later). The Braket SDK automatically reports this for you. If you do not see OpenQASM results in the GetDevice response when using a Braket SDK, you may need to set AWS_EXECUTION_ENV environment variable to configure user-agent. See the code examples provided below for how to do this for the AWS CLI, Boto3, and the Go, Java, and JavaScript/TypeScript SDKs.

```sql
SELECT
deviceArn,
deviceCapabilities,
deviceName,
deviceQueueInfo,
deviceStatus,
deviceType,
providerName
FROM aws.braket.devices
WHERE device_arn = '{{ device_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_devices">

Searches for devices using the specified filters.

```sql
SELECT
deviceArn,
deviceName,
deviceStatus,
deviceType,
providerName
FROM aws.braket.devices
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
